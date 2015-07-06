/*!
 * RoutingManager.js 
 * Copyright(c) 2015 InformatixPro, LLC 
 */

/**
 * External Dependencies
 */
var router = require('express').Router(),
    bodyParser = require('body-parser');

var RoutingManager = function() {
    "use strict";
    
    /**
     * Create an object with default CRUD routes and associated them to a controller.
     *
     * @param {string} name - routing name (ex .../name[/id])
     * @param {object} objController 
     * @access public 
     */
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

/**
 * Exports 
 */
module.exports = RoutingManager;


