const Place = require('../../models/Place');

const near = async (longitude, latitude, radius, category) => {
  try {
    const places = await Place.find({
      placeCategory: category,
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [longitude, latitude] },
          $maxDistance: radius,
        },
      },
    });

    console.log(places.length);
    return places;
  } catch (error) {
    return error;
  }
};

module.exports = near;
