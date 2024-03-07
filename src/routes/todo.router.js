import {Router} from "express";
import { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const router = Router();

router.route('/todos')
    .post(addTodo)
    .get(getAllTodos);

router.route('/todos/:id')
    .get(toggleTodoDone)
    .put(updateTodo)
    .delete(deleteTodo);

router.route('/todos/toggle/:id')
    .put(toggleTodoDone)


export default router;