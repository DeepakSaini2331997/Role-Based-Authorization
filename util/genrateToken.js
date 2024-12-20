import jwt from "jsonwebtoken"
import { jwtsecret } from "../config/env.js"

const createToken = (req,res)=>{
    const {id,name,role,department,accessLevel } = req
    const user ={
        id:id,
        name:name,
        role:role,
        department:department,
        accessLevel:accessLevel
    }
    if(user){
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