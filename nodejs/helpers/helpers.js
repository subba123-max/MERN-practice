exports.success=(res,msg)=>{
    const data={
        status:200,
        msg:msg
    }
    return res.json(data)
}
exports.fail=(res,msg)=>{
    const data={
        status:400,
        msg:msg
    }
    return res.json(data)
}
exports.data=[{
    name:"ram",
    email:"ram@gmail.com"
}]