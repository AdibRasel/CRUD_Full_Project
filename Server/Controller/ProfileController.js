const PfofileModel = require("../Models/ProfileModel.js");
const Jwt = require("jsonwebtoken");
const ProfileModel = require("../Models/ProfileModel.js");
exports.Registration=(Req, Res)=>{

    let RequestBody = Req.body;

    PfofileModel.create(RequestBody, (Error, Data)=>{
        if(Error){
            Res.status(400);
            Res.json(
                {
                    Status:"Create Profile Fail",
                    Data:Error
                }
            )
        }else{
            // Varify Toke  
            let Paylod ={
                Data:Data
            }
            let Token = Jwt.sign(Paylod, "7382973829")
            RequestBody.Token = Token;
            // Varify Toke end
            Res.status(200).json(
                {
                    Token:Token,

                    Status:"Create Profile Success",
                    Data:Data
                }
            )
        }
    })

}

// Login   
exports.Login=(Req,Res)=>{
    let RequestBody = Req.body;
    let UserNameFind = RequestBody["UserName"];
    let UserPasswordFind = RequestBody["Password"];

    PfofileModel.find({"UserName": UserNameFind, "Password": UserPasswordFind},(Error, Data)=>{

        if(Data.length > 0){
            Res.status(200);
            Res.json({
                Login:"Login Success",
                Data:Data
            })
        }else{
            Res.status(401);
            Res.json({
                Status:"Login Faild"
            })
        }
    })

}


exports.ProfileRead =(Req, Res)=>{
    let Query = {};
    let Projection = "Name UserName FatherName MotherName Address Mobile Email Image Password";
    ProfileModel.find(Query, Projection,(Error, Data)=>{
        if(Error){
            Res.status(400);
            Res.json({
                Login:"Fail"
            })
        }else{
            Res.status(200);
            Res.json({
                Status:"Success",
                Data:Data
            })
        }
    })
}