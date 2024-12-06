const mongoose = require('mongoose');

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/Products"; // Database name: Products

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Schema and Model
const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Data to populate
const menuData = [
  { name: "Bhapa Pitha", image: "path-to-Bhapa-image", price: "249tk/450gm" },
  { name: "Chitoi Pitha", image: "path-to-Chitoi-image", price: "199tk/500gm" },
  { name: "Nokshi Pitha", image: "path-to-Nokshi-image", price: "499tk/500gm" },
  { name: "Patishapta", image: "path-to-Patishapta-image", price: "249tk/450gm" },
  { name: "Ghurer Puli", image: "path-to-Ghurer-image", price: "249tk/500gm" },
  { name: "Coconut Puli", image: "path-to-Coconut-image", price: "269tk/500gm" },
  { name: "Meaty Puli", image: "path-to-Meaty-image", price: "499tk/500gm" },
];

// Populate the database
const seedDatabase = async () => {
  try {
    await MenuItem.deleteMany(); // Clear existing data
    await MenuItem.insertMany(menuData); // Insert new data
    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

seedDatabase();
