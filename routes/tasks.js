const express = require('express');
const router = express.Router();
const {getAllTasks, insertTask, getTaskById, updateTask, deleteTask, editTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(insertTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask).put(editTask);

module.exports = router; 