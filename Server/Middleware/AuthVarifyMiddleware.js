const Jwt = require("jsonwebtoken");


module.exports=(Req, Res, Next)=>{
    let Token = Req.body;
    let TokenVarify = Token["Token"]
    Jwt.verify(TokenVarify, "7382973829",(Error, Decode)=>{
        if(Error){
            Res.status(401).json({status:"Login Fails", Error:Error})
        }else{
            //প্রোফাইল ক্রিয়েট করার সময় যে টোকেন তৈরি করা হয়েছে সেটি রিকোয়েস্ট বডি থেকে তথ্য নিয়ে ভ্যারিফাই করে নেক্সট করে দিয়েছে।
            let UserName = Req.body["UserName"];
            let Password = Req.body["Password"];

            let DecodeUserName = Decode.Data.Name;
            let DecodePassword = Decode.Data.Password;


            // Decode.Data.Data.UserName
            // Decode.Data.Data.Password
            // let test = {
            //     "Hello " : Decode.Data.Name
            // }
            
            if(DecodeUserName == UserName || DecodePassword == Password){
                Next()
            }

            // DecodeUserName = UserName;
            // DecodePassword = Password;
            
            // Res.json({Data:Password})
            // Next()
        }
    })
}