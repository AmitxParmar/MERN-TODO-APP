const mongoose = require('mongoose');

module.export = async () => {

    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(//address here mongo
            "mongodb://localhost:27017/to-do",
            //process.env.MONGO_URL,
            connectionParams
        );
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log("Couldn't connect to MongoDB", err);
    }
};