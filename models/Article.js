const mongoose = require("mongoose");

// save reference to the schema constructor 
const Schema = mongoose.Schema;

// create schema for each article 
let ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    summary:  {
        type: String,
        required: true,
        unique: true
        
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

//this will create our model from the schema above with mongoose
let Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;