const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const pointSchema = new Schema({
  type: {
    type: String, // Don't do `{ location: { type: String } }`
    enum: ['Point'], // 'location.type' must be 'Point'
    required: true,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

// Create Place Schema & Model
const PlaceSchema = new Schema({
  placeCategory: {
    type: String,
    required: [true, 'Place category field is required'],
  },
  title: {
    type: String,
    required: [true, 'Title field is required'],
  },
  location: {
    type: pointSchema,
    required: true,
  },
  address: {
    type: Object,
  },
});

PlaceSchema.index({ location: '2dsphere' });

const Place = mongoose.model('place', PlaceSchema, 'place');

module.exports = Place;
