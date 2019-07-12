'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var recipe = Schema( {
  name: String,
  ingredients: String,
  description:String,
  userId: ObjectId,
  createdAt: Date,


} );

module.exports = mongoose.model( 'recipe', recipeSchema );
