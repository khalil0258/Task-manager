const Task = require("../models/task.js");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks: tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ task });
});
const getTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: "no task with this  id" });
  }
  res.status(200).json({ task });

  //   res.json({ id: req.params.id });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: "no task with that id" });
  }
  res.status(200).json({ task: null, status: "success" });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    newValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: "no task with that id" });
  }
  res.status(200).json({ task });
});
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
