import mongoose,{Schema} from "mongoose";
const todoSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    timestamps:true
})

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;