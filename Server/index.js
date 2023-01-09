const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');
const port = process.env.PORT || 8080;


connection();
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});