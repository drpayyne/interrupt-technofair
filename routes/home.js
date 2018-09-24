var express = require('express')
var router = express.Router()
var randomize = require('randomatic')

var Player = require('../models/player')
var Counter = require('../models/counter')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('home')
});

router.get('/new_player', function(req, res) {
	res.render('new_player')
})

router.post('/new_player', function(req, res) {
	console.log('Creating new player...')
	var player = req.body
	Counter.findOneAndUpdate({}, {$inc: {seq: 1}}, {setDefaultsOnInsert: true, upsert: true}, function(err, counter) {
		if (err) {
			console.log(err)
			res.status(500).send(err)
		} else if (counter) {
			console.log('New count: ' + counter.seq)
			player.code = counter.seq
			Player.create(player, function(err, player) {
				if(err) {
					console.log(err)
					res.status(500).send(err)
				} else {
					console.log('Created new player!')
					console.log(player)
					res.render('code', {
						player
					})
				}
			})
		} else {
			console.log(err)
			console.log(counter)
		}
	})
})

router.get('/view_scores', function(req, res) {
	Player.find({}).sort({score: -1}).exec(function(err, docs) {
		if(err) {
			console.log(err)
			res.status(500).send(err)
		} else {
			res.render('view_scores', {
				players: docs
			})
		}
	})
})

router.get('/view_player', function(req, res) {
	Player.findOne({code: req.query.code}, function(err, doc) {
		if(err) {
			console.log(err)
			res.status(500).send(err)
		} else if (!doc) {
			res.render('view_player', {
				error: true
			})	
		} else {
			res.render('view_player', {
				error: false,
				player: doc
			})
		}
	})
})

router.get('/update_player', function(req, res) {
	res.render('update_player')
})

router.post('/update_player', function(req, res) { 
	console.log('Player score updated received...')
	console.log(req.body)
	if(req.body.toggle == 'true') {
		Player.findOneAndUpdate({code: req.body.code}, {$inc: {score: req.body.score}}, function(err, player) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			} else if (player) {
				console.log('Player updated')
				console.log(player)
				res.redirect('view_player?code=' + req.body.code)
			} else {
				res.redirect('view_player?code=-1')
			}
		})
	} else {
		Player.findOneAndUpdate({code: req.body.code}, {$inc: {score: -req.body.score}}, function(err, player) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			} else if (player) {
				console.log('Player updated')
				console.log(player)
				res.redirect('view_player?code=' + req.body.code)
			} else {
				res.redirect('view_player?code=-1')
			}
		})
	}
})

module.exports = router
