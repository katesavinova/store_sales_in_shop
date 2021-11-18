module.exports.login = (req,res)=>{
    res.status(200).json({
        login: true,
        message:"success!"
    })
}
module.exports.register = (req,res)=>{
 res.status(200).json({
     register: 'from controller'
 })
}