var router = require('express').Router(),
    bodyParser = require('body-parser');

var RoutingManager = function() {
    "use strict";
    
    this.CreateAndLinkRouteToController = function(name, objController) {
        
        // This allows us to parse JSON in the body of the PUT and POST requests
        router.use(bodyParser.urlencoded({extended: false}));
        router.use(bodyParser.json());

        router.route('/' + name)
            .get(objController.get)
            .put(objController.put)
            .delete(objController.delete)
            .post(objController.post);

        router.route('/' + name + '/:id')
            .get(objController.getById);
            // Others ops not supported yet
            // TODO: setup default routes for unsupported routes/actions
        
        return router;
    };
};

module.exports = RoutingManager;


