const axios = require('axios');
const Dev = require('../models/dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');


// Common database methods : index, store, update and destroy

module.exports = {

    //Returns a collection of all the devs on Dev DB.
    async index(request, response) {
        const devs = await Dev.find();
        return response.json(devs);
    },

    //Check if there is already an entry on database with queried github username. Creates an entry if it doesn't find one.
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        const dev = await Dev.findOne({ github_username });

        if(!dev) {
    
        const api_response = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login, avatar_url, bio, _id } = api_response.data;
    
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
    
        console.log(name, avatar_url, bio, github_username, _id);
        const newdev = await Dev.findOne({ github_username });
        return response.json(newdev);
            }
        console.log(dev.name, dev.avatar_url, dev.bio, dev.github_username, dev._id);
        return response.json("100");
    },

    //Updates a dev entry on the DB, but does not modify that devs github username.
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

    //Delete a dev entry on the DB.
    async destroy(request, response){
        const { _id } = request.body;
        const dev = await Dev.findOne({ _id })
        console.log(request.body)
        if (!dev) {
            return response.json('No matching entry');
        }
        else {
            await Dev.remove(
                {_id: _id },
            )
            return response.json('Entry deleted');
        }
        
        
    },
}