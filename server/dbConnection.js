const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ezmatteo:1408@Azale.zbw4fyl.mongodb.net/?retryWrites=true&w=majority&appName=Azale";
const client = new MongoClient(uri);

const dbName = "Azale"; // Il nome del tuo database
const collectionName = "subscribers"; // Il nome della collezione che vogliamo creare/usare

let db;

async function connectToDatabase() {
  if (db) return db;
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
    console.log(`Using database: ${dbName}`);

    // Verifica se la collezione esiste, se no la crea
    const collections = await db.listCollections({name: collectionName}).toArray();
    if (collections.length === 0) {
      await db.createCollection(collectionName);
      console.log(`Collection ${collectionName} created.`);
    } else {
      console.log(`Collection ${collectionName} already exists.`);
    }

    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

async function addSubscriber(email) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  
  try {
    const result = await collection.insertOne({ email, subscriptionDate: new Date() });
    console.log(`New subscriber added with ID: ${result.insertedId}`);
    return result.insertedId;
  } catch (error) {
    console.error("Error adding subscriber:", error);
    throw error;
  }
}

async function listDatabases() {
  try {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  } catch (error) {
    console.error("Error listing databases:", error);
  }
}

async function listCollections() {
  try {
    const db = await connectToDatabase();
    const collectionsList = await db.listCollections().toArray();
    console.log(`Collections in ${dbName}:`);
    collectionsList.forEach(collection => console.log(` - ${collection.name}`));
  } catch (error) {
    console.error("Error listing collections:", error);
  }
}

module.exports = { addSubscriber, listDatabases, listCollections, connectToDatabase };