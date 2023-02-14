// Basic Lib Import 
const Express = require ("express");
const Router = require("./Routers/Router.js");
const App = new Express();
const BodyParser = require("body-parser");


// Security Middleware Lib Import 
const RateLimiter = require("express-rate-limit");
const Helmet = require("helmet");
const MongoSanitize = require("express-mongo-sanitize");
const Xss = require("xss-clean");
const Hpp = require("hpp");
const Cors = require("cors");


// Database Lib Import 
const Mongose = require("mongoose");


// Security Midleware Implement
App.use(Cors());
App.use(Helmet());
App.use(MongoSanitize());
App.use(Xss());
App.use(Hpp());


// Body Parser Implement 
App.use(BodyParser.json());


// Request Rate Limite 
const Limiter = RateLimiter(
    {
        windowMS: 15 * 60 *1000, // 15 Minute 
        max:3000 // 3000 Request
    }
)
App.use(Limiter);



// MongoDB Database Configarution 
let Url = "mongodb://127.0.0.1:27017/ComplateCRUD_Project" // Database Name আগে সেট করে নিতে হবে। 
// let OPTION = {user:"", Pass:"", autoIndex:true};
Mongose.connect(Url, (Error)=>{
    console.log("MongoDB Database Connection Success");
    console.log(Error);
})


//API Implement Or Routing Implement
App.use("/api/v1/", Router);


// Undifine Router Or Undifine Api 
App.use("*", (Req, Res)=>{
    Res.status(404);
    Res.json(
        {
            Status:"Not Fund",
            Data:"Undifine Route Or Rong API"
        }
    )
})


module.exports = App;