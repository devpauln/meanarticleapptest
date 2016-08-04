'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Article name',
    trim: true
  },
  size: {
    type: Number,
    min: 0,
    max: 1000000,
    default: 0
  },
  description: {
    type: String,
    required: 'Please fill description',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
