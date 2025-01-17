import  mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const uri = process.env.MONGO_URI


const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

 async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}


const connectDb = async() => {
  console.log(`server is running on ${port}`)
  return await run().catch(console.dir);
}

const port = process.env.PORT;

export {
  connectDb,
  port
}

