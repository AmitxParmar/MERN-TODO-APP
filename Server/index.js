const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');
const port = process.env.PORT || 8080;
const tasks = require('./routes/tasks');

connection();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});