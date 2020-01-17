const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

routes.get('/',  (request, response) => {
    return response.json("Under construction");
});

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

routes.put('/devs', DevController.update);
routes.delete('/devs', DevController.destroy);

module.exports = routes;