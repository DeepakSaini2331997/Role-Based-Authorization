const errorHandler = (err,req,res,next)=>{
    return res.status(500).json({
        success:false,
        msg:"Internal Server Error "+err.message
    })
}

export default errorHandler