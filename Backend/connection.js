const mongoose = require('mongoose');

async function connectMongo() {
    const connection = await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected Successfully to database");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = connectMongo;