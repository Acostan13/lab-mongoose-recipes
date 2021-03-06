const mongoose = require("mongoose");
const Recipe = require("./models/Recipe.model"); // Import of the model Recipe from './models/Recipe.model.js'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipe-app-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

// Recipe.create(data)
//   .then(user => console.log("The user is saved and its value is: ", user))
//   .catch(error =>
//     console.log("An error happened while saving a new user:", error)
//   );

Recipe.updateOne({ title: "Rigatoni alla Genovese"}, {duration: 100 })
  .then(user => console.log("The duration has been updated"))
  .catch(error =>
    console.log("An error happened while saving a new user:", error)
  );
// Recipe.create({
//   title: "spagoot",
//   cuisine: "italianese"
// });

// Recipe.deleteOne({title: "Carrot Cake"})
// .then(user => console.log("The Carot Cake has been deleted"))


