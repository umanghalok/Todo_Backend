import Todo from '../models/todo.model.js';
const addTodo = async (req, res) => {
    try {
        const {data}=req.body
        const newTodo = await Todo.create({
            data,
            createdAt: Date.now()
        })

        await newTodo.save();
        return res.status(200).json({message:"Todo added successfully!"});

    } catch (error) {
        return res.status(500).json({message:"ERROR occured while adding Todo"});
    }
}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })
        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

const toggleTodoDone = async (req, res) => {
    try {
        const { id } = req.params;
        const todoRef = await Todo.findById(id);

        const todo = await Todo.findOneAndUpdate(
            { _id: id },
            { done: !todoRef.done }
        );

        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findOneAndUpdate(
            { _id: id },
            { data: req.body.data }
        );

        const todo = await Todo.findById(id);

        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};


export {addTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo}