const Dev = require('../models/dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request, response) {
        let { latitude, longitude, techs = "None", distance = 2500} = request.query;
        if (typeof distance !== 'number' && distance.length == 0) {
            distance = 2500;
        }


        const techsArray = ParseStringAsArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                $maxDistance: distance
                },
            },
        }); 
        return response.json(devs);
    },

}