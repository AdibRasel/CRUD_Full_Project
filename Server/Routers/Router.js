// Router Implement and Configaration
const Express = require("express");
const Router = Express();

// Profile control 
const ProfileController = require("../Controller/ProfileController.js")


// Registration
Router.post("/Registration", ProfileController.Registration)












module.exports = Router