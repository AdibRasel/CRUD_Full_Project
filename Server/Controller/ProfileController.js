const PfofileModel = require("../Models/ProfileModel.js");

exports.Registration=(Req, Res)=>{

    let RequestBody = Req.body;PfofileModel

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
            Res.status(200);
            Res.json(
                {
                    Status:"Create Profile Success",
                    Data:Data
                }
            )
        }
    })

}