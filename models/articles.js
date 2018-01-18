const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: { type: String, required: true },
	date: { type: Date, required: true },
	url: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Article", articleSchema);
