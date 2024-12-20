import jwt from "jsonwebtoken"
import { jwtsecret } from "../config/env.js"

const verifyToken = (req,res,next)=>{
    try{
        let token 
        authHeader = req.headers.Authorization || req.headers.authorization
        if(authHeader && authHeader.startsWith("Bearer")){
            token = authHeader.split(" ")[1]
            if(!token){
                res.status(401).json({
                    success:false,
                    msg:"UnAuthorization !"
                })
            }
            try{
                const decode = jwt.verify(token,jwtsecret)
                req.user = decode
                next()
            }catch(error){
                res.status(401).json({
                    success:false,
                    msg:"UnAuthorization !"
                })
            }

        }
            
    }catch(error){
        res.status(401).json({
            success:false,
            msg:"UnAuthorization !"
        })
    }
}

export {
    verifyToken
}