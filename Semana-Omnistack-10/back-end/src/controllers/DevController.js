const axios = require('axios');
const Dev = require('../models/dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');
const SearchController = require('./SearchController');

// index, show, store, update, destroy
module.exports = {
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev) {
    
        const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio } = api_response.data;
    
        const techs_array = ParseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
        await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techs_array,
            location,
        });
    
        console.log(name, avatar_url, bio, github_username);
        return response.send('Entry created');
    }
        return response.send('Entry already exists');
    },

    async update(request, response) {
        const { object_id, github_username, techs, latitude, longitude} = request.body;
        const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
        const { name = login, avatar_url, bio } = api_response.data;
        const techs_array = ParseStringAsArray(techs)

        await Dev.update(
            { _id: object_id },
            { $set:
               {
                name: name,
                avatar_url: avatar_url,
                bio: bio,
                 techs: techs_array,
                 location: {
                     type: 'Point',
                     coordinates: [longitude, latitude],
                 },
               }
            }
         );
         return response.send('Entry updated');
    },

    async destroy(request, response){
        const { object_id } = request.body;
        await Dev.remove(
            {_id: object_id },
        )
        return response.send('Entry deleted');
    },
}