const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.Port || 4000;

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://harikrishnasinh:qaz10plm@firstcluster.rijqcwc.mongodb.net/';
console.log(url);
mongoose.connect(url);

// online code start
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })
// online code over

const excerciseRouter = require('./routes/excercises');
const userRouter = require('./routes/users');

app.use('/exercises',excerciseRouter)
app.use('/users',userRouter)

app.listen(port,()=>{
    console.log(`server is started on port : ${port}`);
})