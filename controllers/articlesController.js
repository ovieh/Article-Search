const db = require("../models");

module.exports = {
	findAll(req, res) {
		db.Article
			.find(req.query)
			.sort({ date: -1 })
			.then( dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById(req, res) {
		db.Article
			.findById(req.params.id)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	create(req, res) {
		db.Article
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update(req, res) {
		db.Article
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then( dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove(req, res) {
		db.Article
			.findById({ _id: req.params.id })
			.then( dbModel => dbModel.remove())
			.then( dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};