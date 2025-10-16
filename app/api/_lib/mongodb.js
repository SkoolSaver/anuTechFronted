import { MongoClient, ServerApiVersion } from "mongodb";

// Cache the client between hot reloads in dev and across invocations in serverless when possible
let globalWithMongo = global;
let cached = globalWithMongo._mongoCached;
if (!cached) {
  cached = globalWithMongo._mongoCached = { client: null, promise: null };
}

export async function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Please add it to your environment.");
  }

  if (!cached.promise) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    cached.promise = client.connect().then((c) => {
      cached.client = c;
      return c;
    });
  }

  const connected = await cached.promise;
  const dbName = process.env.MONGODB_DB || "anutech";
  return connected.db(dbName);
}
