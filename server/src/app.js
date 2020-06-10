const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  'mongodb://localhost:27017/posts',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connection to DB Succeeded"))

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello world",
      description: "hi there, howdy do?"
    },
    {
      title: "Heya",
      description: "hi there, good and u?"
    }]
  )
})



const port = process.env.PORT || 8081

app.listen(port, () => console.log(`Listening on port ${port}`));