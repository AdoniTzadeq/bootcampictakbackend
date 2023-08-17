const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://kucuau:btechnilma@students.jacqzar.mongodb.net/STUDENTINFO?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`mongoose connected successfully`);
  })
  .catch((error) => {
    console.log(error.message);
  });
