const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const queries = require('./queries')

app.get('/', (req,res,next) =>{
  queries.getAll().then((data) => {
    res.json({data});
  })
})

app.listen(port, () => {
  console.log(`running on port ${port}`);
})
