const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})

const userRoute = require('./routes/users');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/users', userRoute);

//Start the server
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
