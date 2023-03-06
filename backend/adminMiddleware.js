const checkAdmin=(req,res,next)=>{
    const user=req.body;
    if(user.role !='admin'){
        return res.status(403).json({Message:"Forbidden Error!"});
        
    }
    next();
}



module.exports={
    checkAdmin
}