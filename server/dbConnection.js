const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ezmatteo:1408@cluster0.zbw4fyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  if (db) return db;
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db("your_database_name"); // Replace with your actual database name
    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

async function addSubscriber(email) {
  const db = await connectToDatabase();
  const collection = db.collection("subscribers"); // Replace with your actual collection name
  
  try {
    const result = await collection.insertOne({ email, subscriptionDate: new Date() });
    console.log(`New subscriber added with ID: ${result.insertedId}`);
    return result.insertedId;
  } catch (error) {
    console.error("Error adding subscriber:", error);
    throw error;
  }
}

module.exports = { addSubscriber };