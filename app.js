const mongoose = require('mongoose');

// Step 1: MongoDB URI (replace with your DB name)
const mongoURI = 'mongodb://localhost:27017/Contact';

// Step 2: Connect to MongoDB
mongoose.connect(mongoURI, {
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ Connection failed:', err);
});

// Step 3: Define a Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phnumber: Number,
});

// Step 4: Create a Model (Collection name will be pluralized → contacts)
const Contact = mongoose.model('Contact', contactSchema);

// Step 5: Insert a sample document (This will create the DB and collection