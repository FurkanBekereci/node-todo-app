const express = require('express');
const router = express.Router();
const {getAllTasks, insertTask, getTaskById, updateTask, deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(insertTask);
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask);

module.exports = router; 