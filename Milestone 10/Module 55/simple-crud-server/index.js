const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const PORT = process.env.PORT || 5000;

// Chang_e0
// Chang_e0
const uri = "mongodb+srv://Chang_e0:Chang_e0@cluster0.gexqpbd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Middleware setup
app.use(cors());
app.use(express.json());


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log(user);
    });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);


// Routes
app.get('/', (req, res) => {
    res.send('Backend is running!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});