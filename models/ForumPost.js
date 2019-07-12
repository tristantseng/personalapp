'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var forumPostSchema = Schema( {
  userId: ObjectId,
  userName: String,
  dishname: String,
  ingredient: String, // ingredient
  post: String, //describtion
  createdAt: Date,

} );

module.exports = mongoose.model( 'ForumPost', forumPostSchema );
