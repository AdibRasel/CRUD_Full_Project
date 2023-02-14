const App = require("./App.js");

// const DotEnv = require("dotenv");

// DotEnv.config({path:"./Config.env"});

// App.listen(process.env.PORT, ()=>{
//     console.log("Server Run Success: Address: http://localhost/5000")
// })
App.listen(5000, ()=>{
    console.log("Server Run Success: Address: http://localhost:5000/")
})