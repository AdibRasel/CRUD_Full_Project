const Mongose = require("mongoose");

const DataSchema = Mongose.Schema(
    {
        Name:{type:String},
        UserName:{type:String, unique:true},
        FatherName:{type:String},
        MotherName:{type:String},
        Address:{type:String},
        Mobile:{type:String},
        Email:{type:String},
        Image:{type:String},
        Password:{type:String}
    },{
        versionKey:false
    }
);

const ProfileModel = Mongose.model("Registration", DataSchema);

module.exports = ProfileModel