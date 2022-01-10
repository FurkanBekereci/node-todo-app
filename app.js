
const connectDb = require('./db/connect');
require('dotenv').config();

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI);
        const server = require('./server');
    } catch (error) {
        console.log(error);
    }
}

start();