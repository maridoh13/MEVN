const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

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