const { response } = require('express');
const { NotFoundError } = require('../errors/not-found-error')
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');

module.exports.getAllTasks = asyncWrapper(async (req,res) => {
    // res.send("Getting all taskssa...");
    const tasks = await Task.find({});
    res.status(200).json({tasks})

})

module.exports.insertTask = asyncWrapper(async (req,res) => {
    //simple testing with response;
    // res.json({...req.body, id : 200});

    const insertedTask = await Task.create(req.body);
    res.status(201).json(insertedTask);    
})
module.exports.getTaskById = asyncWrapper(async (req,res,next) => {
    //simple testing with response
    // res.json({id : req.params.id});
    const {id} = req.params;
    const selectedTask = await Task.findById(id);
    if(!selectedTask){
        // const error = new Error("Not found!");
        // error.status = 404;
        return next(new NotFoundError(`Could not find task with id ${id}`))
        //throw new NotFoundError(`Could not findaa task with id ${id}`)
    }
    res.status(201).json(selectedTask);
})

module.exports.updateTask = asyncWrapper(async (req,res,next) => {
    //simple testing with response
    // res.send(`The task with ${req.params.id} is updating`);
    const {id} = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id,req.body,{new : true, runValidators : true})
    if(!updatedTask){
        // const error = new Error("Not found!");
        // error.status = 404;
        return next(new NotFoundError(`Could not find task with id ${id}`))
    }
    res.status(200).json(updatedTask);
})

module.exports.editTask = asyncWrapper(async (req,res) => {
    //simple testing with response
    // res.send(`The task with ${req.params.id} is updating`);

    const {id} = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id,req.body,{new : true, runValidators : true, overwrite : true})
    if(!updatedTask){
        // const error = new Error("Not found!");
        // error.status = 404;
        return next(new NotFoundError(`Could not find task with id ${id}`))
    }
    res.status(200).json(updatedTask);
    
})

module.exports.deleteTask = asyncWrapper(async (req,res) => {
    //simple testing with response
    // res.send(`The task with ${req.params.id} is deleting`);
    const {id} = req.params;
    const taskDeleted = await Task.findByIdAndDelete(id);
    if(!taskDeleted){
        // const error = new Error("Not found!");
        // error.status = 404;
        return next(new NotFoundError(`Could not find task with id ${id}`))
    }
    res.status(200).json(taskDeleted)
})