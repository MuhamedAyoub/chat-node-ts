import * as process from "process";

import  { MongoClient } from "mongodb";
import {createAdapter} from "@socket.io/mongo-adapter";

const DB = "chat";
const COLLECTION = "socket.io-adapter-events";


const mongoClient = new MongoClient(process.env.DATABASE_URL || '');

export default  async (io:any) => {
    await mongoClient.connect();

    try {
        await mongoClient.db(DB).createCollection(COLLECTION, {
            capped: true,
            size: 1e6
        });
    } catch (e) {
        // collection already exists
    }
    const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

    io.adapter(createAdapter(mongoCollection));

}

