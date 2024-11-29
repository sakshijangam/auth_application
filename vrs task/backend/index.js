const express = require('express');
const app = express ();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/ProductRouter');

require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT;
app.get('/ping',(req,res)=>{
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);//raw db


app.listen(PORT, () => {
    console.log('SERVER IS RUNUING on ',PORT);
})