const Todo = require("../models/Todo")

exports.addTodo = async(req,res)=>{
    
   await Todo.create({...req.body,userID:req.user})
    res.json({message:"todo create success"})
}
exports.getTodo = async(req,res)=>{
    const result = await Todo.find({userID:req.user})
    res.json({message:"todo fetch success",result})
}
exports.updateTodo = async(req,res)=>{
    const {kuchbhi} = req.params
    await Todo.findByIdAndUpdate(kuchbhi,req.body)
    res.json({message:"todo update success"})
}
exports.deleteTodo = async(req,res)=>{
    const {kuchbhi} = req.params
    await Todo.findByIdAndDelete(kuchbhi)
    res.json({message:"todo delete success"})
}