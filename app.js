const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`server is running  on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
