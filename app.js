const express = require('express');
const morgan = require('morgan');
const app = express();

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
