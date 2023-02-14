import axios from "axios";


// Registration
export function RegistrationProfile(Name, UserName, FatherName, MotherName, Address, Mobile, Email, Image, Password){
    let URL = "http://localhost:5000/api/v1/Registration";

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
            return true;
        }else{
            return false
        }
    }).catch((Err)=>{
        console.log(Err);
        return false;
    })


}