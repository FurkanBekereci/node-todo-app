const { response } = require('express');
const Task = require('../models/Task');

module.exports.getAllTasks = async (req,res) => {
    // res.send("Getting all taskssa...");
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})    
    } catch (error) {
        res.status(500).send(`Oh noooo!! Something went wrong!! Message : ${error}`);
    }
}

module.exports.insertTask = async (req,res) => {
    //simple testing with response;
    // res.json({...req.body, id : 200});
    try {
        const insertedTask = await Task.create(req.body);
        res.status(201).json(insertedTask);    
    } catch (error) {
        res.status(500).send(`Oh noooo!! Something went wrong!! Message : ${error}`);
    }
    

}
module.exports.getTaskById = async (req,res) => {
    //simple testing with response
    // res.json({id : req.params.id});
    const {id} = req.params;
    const selectedTask = await Task.findById(id)
    res.status(201).json(selectedTask);
}
module.exports.updateTask = async (req,res) => {
    //simple testing with response
    // res.send(`The task with ${req.params.id} is updating`);
    try {
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id,req.body,{new : true, runValidators : true})
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).send(`Oh noooo!! Something went wrong!! Message : ${error}`);
    }
}
module.exports.deleteTask = async (req,res) => {
    //simple testing with response
    // res.send(`The task with ${req.params.id} is deleting`);
    const {id} = req.params;
    const taskDeleted = await Task.findByIdAndDelete(id);
    res.status(200).json(taskDeleted)
}