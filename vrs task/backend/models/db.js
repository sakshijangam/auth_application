
const mongoose = require ('mongoose');
const mong_url=process.env.MONGO_CONN;
mongoose.connect(mong_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })