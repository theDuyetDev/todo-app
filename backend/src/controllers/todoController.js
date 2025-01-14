import Todo from "../models/Todo.js";

const create = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTodo = new Todo({ title, description });
    await newTodo.save();

    res.status(201).json({ message: "New todo created successfully", newTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAll = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({ message: "Retrieve todo successfully", todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found!",
      });
    }

    return res.status(200).json({
      message: "Successful",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found!",
      });
    }

    return res.status(200).json({
      message: "Todo updated successfully",
      updatedTodo,
    });
  } catch (error) {}
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found!",
      });
    }

    await Todo.findByIdAndDelete(id);
    return res.status(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { create, getAll, getById, update, deleteById };
