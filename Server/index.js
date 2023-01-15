const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
try {
    mongoose.set("strictQuery", false);
    mongoose.connect(//address here mongo
        "mongodb://localhost:27017/mern-todo",
        //process.env.MONGO_URL,
        () => console.log('Connected to MongoDB')
    );
} catch (err) {
    console.log("Couldn't connect to MongoDB ", err);
}

const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});


app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
});

app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});




app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
