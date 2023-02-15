import axios from "axios";


// Registration
export function RegistrationProfile(Name, UserName, FatherName, MotherName, Address, Mobile, Email, Image, Password){
    let URL = "http://localhost:5000/api/v1/Registration";
    // let URL = "/api/v1/Registration";

    let PostBody={
        Name:Name,
        UserName:UserName,
        FatherName:FatherName,
        MotherName:MotherName,
        Address:Address,
        Mobile:Mobile,
        Email:Email,
        Image:Image,
        Password:Password
    }
    return axios.post(URL, PostBody).then((Res)=>{
        if(Res.status === 200){
            // return true;
            return Res
        }else{
            return false
        }
    }).catch((Err)=>{
        console.log(Err);
        return false;
    })


}



// Login  
export function LoginProfile(UserName, Password, Token){
    let URL = "http://localhost:5000/api/v1/Login";
    let PostBody = {
        UserName:UserName,
        Password:Password,
        Token:Token
    }
    return axios.post(URL, PostBody).then((Response)=>{
        if(Response.status === 200){
            return true
        }else{
            return false;
        }
    })
}


//Profile
export function ProfileRead(){
    let URL = "http://localhost:5000/api/v1/Profile";
    return axios.get(URL).then((Response)=>{
        if(Response.status === 200){
            // return Response["Data"].Data.Data
            return Response.data
        }else{
            return false;
        }
    }).catch((Error)=>{
        console.log(Error);
        return false;
    })
}