// Importing modules
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

const mongoose = require("mongoose");

// Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    // if DB_NAME doesn't exist it creates it doesn't exist, it creates a new one
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongodb connected.....");
  })
  .catch((err) => console.log(err.message));

// Mongoose schema - specifications of the content of each document entry
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check entry. No name specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
});

// Mongoose model is created from schema ("Singular", schema) //basically a collection
const Product = mongoose.model("Product", productSchema);

// testEntry.save();

Product.find({})
  .then((items) => {
    items.forEach((i) => console.log(i.name));
  })
  .catch((err) => {
    console.log(err);
  });

const testEntry = new Product({
  rating: 5,
  review: "Another delicious coffee.",
});

// Product.deleteOne({ _id: "60724cfadf5c34340c31e40f" })
//   .then((item) => {
//     console.log(`Successfully deleted ${item.name}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Product.updateOne(
//   { _id: "60724cfadf5c34340c31e40f" },
//   { name: "Organic Coffee" },
//   (err) => {
//     if (err) console.log(err);
//     else console.log("Successfully updated the document.");
//   }
// );

// Product.insertMany([product, product2])
//   .then(() => {
//     console.log("Data inserted.");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Concepts to remember:
// import mongoose
// connect (use dotenv for environment variables)
// create schema (rules)
// create model from schema (collection)
// create entries (.save() and insertMany)
// mongoose.connection.close() when you're done

// querying commands:
// .save
// insertMany
// find()
