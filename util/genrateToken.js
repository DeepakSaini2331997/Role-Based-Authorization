import jwt from "jsonwebtoken"
import { jwtsecret } from "../config/env.js"

const createToken = (req,res)=>{
    //console.log(req," my requesttttis")
    const {id,name,role,department,accessLevel } = req.body
    const user ={
        id:id,
        name:name,
        role:role,
        department:department,
        accessLevel:accessLevel
    }
    //console.log(user, "my user record"); return false;
    if(user.id && user.name && user.role){
        try{
            const token = jwt.sign(user,jwtsecret,{expiresIn:"1h"})
            res.status(200).json({
                success:true,
                token:token
            })
        }catch(err){
            res.status(400).json({
                success:false,
                msg:"Token not Genrated "+err
            })
        }    
    }else{
        res.status(400).json({
            success:false,
            msg:"User information is not valid !"
        })
    }

   }

export default createToken