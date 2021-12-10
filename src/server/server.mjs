
// https://nanojsx.github.io/

import express from "express";
import test from './routes/test.mjs';

const app = express()
const port = 3000;

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send(
    '<script src="/bundle.js"></script>'
  )
})

//var testRoutes = require('./routes/tests');
// Import my test routes into the path '/test'
//app.use('/tests', testRoutes);

//Routes
app.use(test); 

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGTERM',()=>{
  server.close();
})

export default app;