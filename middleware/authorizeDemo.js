
const authorizeDemo = (permissions)=>{
    return (req, res, next)=>{
        // const role = req.body.rolee
        console.log(`---------${req.Role}`)
        
        if(permissions.includes('admin')){
            next()
        }else{
           return res.status(401).json({status:"failed",message:"you are not authorized"})
        }
    }
}

export default authorizeDemo