const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

const articleSeed = [
	{
		title: "This is a Fake Article!",
		date: new Date(Date.now()),
		url: "www.fakeurl.xyz"
	},
	{
		title: "Bulgarian Teenager Fake News!",
		date: new Date(Date.now()),
		url: "www1.fakeurlz.bu"
	}
];

db.Article
	.remove({})
	.then(() => db.Article.collection.insertMany(articleSeed))
	.then( data => {
		console.log(`${data.insertedCount} records inserted!`);
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});