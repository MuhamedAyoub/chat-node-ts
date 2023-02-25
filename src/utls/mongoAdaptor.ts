import * as process from "process";

const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");

const DB = "chat";
const COLLECTION = "socket.io-adapter-events";


const mongoClient = new MongoClient(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});

export default  async () => {
    await mongoClient.connect();

    try {
        await mongoClient.db(DB).createCollection(COLLECTION, {
            capped: true,
            size: 1e6
        });
    } catch (e) {
        // collection already exists
    }
    return   mongoClient.db(DB).collection(COLLECTION);


}

