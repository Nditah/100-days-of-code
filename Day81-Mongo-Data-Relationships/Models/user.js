const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo connection oper");
  })
  .catch((err) => {
    console.log("Mongo error");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  addresses: [
    {
      street: String,
      city: String,
      postcode: Number,
      country: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const user = new User({
        firstName: 'John',
        lastName: 'Doe'
    })

    user.addresses.push({
        street: '123 Street',
        city: 'New York',
        postcode: 12345,
        country: 'USA'
    })

    const res = await user.save()
    console.log(res);
}

makeUser();