// Router Implement and Configaration
const Express = require("express");
const Router = Express();

// Profile control 
const ProfileController = require("../Controller/ProfileController.js")

//
const AuthVarifyMiddleware = require("../Middleware/AuthVarifyMiddleware.js")


// Registration
Router.post("/Registration", ProfileController.Registration)


// Login 
Router.post("/Login", AuthVarifyMiddleware, ProfileController.Login);


// Profile Read
Router.get("/Profile", ProfileController.ProfileRead)







module.exports = Router