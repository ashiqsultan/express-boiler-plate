const Place = require('../../models/Place');

const within = async (geometry) => {
  try {
    // TODO
    // Remove console log on prod
    console.log(JSON.stringify(geometry));

    const places = await Place.find({
      location: {
        $geoWithin: {
          $geometry: geometry,
        },
      },
    });

    return { places };
  } catch (error) {
    throw error;
  }
};

module.exports = within;
