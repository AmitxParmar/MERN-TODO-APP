import cors from 'cors';
import express, { json } from 'express';
import { connect, set } from 'mongoose';

const app = express();
const port = process.env.PORT || 8080;

app.use(json());
app.use(cors());

try {
    set("strictQuery", false);

    connect(//address here mongo
        "mongodb://localhost:27017/mern-todo",
        //process.env.MONGO_URL,
        () => console.log('Connected to MongoDB')
    );

} catch (err) {
    console.log("Couldn't connect to MongoDB ", err);
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
