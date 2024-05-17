const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://harini:hariniramesh@cluster0.kulp9yb.mongodb.net/asap?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database:', err.message);
    }
};

// const DisconnectDB = async () => {
//     await mongoose.disconnect();
//     console.log('Mongoose disconnected');
// };

const checkConnected = () => {
    return mongoose.connection.readyState===1;
};

module.exports = {
    connectDb,
    checkConnected
};


