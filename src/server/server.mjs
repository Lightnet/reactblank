

import express from "express";

import routes from './routes/routes.mjs';

const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send(
    '<script src="/bundle.js"></script>'
  )
})

//Routes
app.use(routes); 

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGTERM',()=>{
  server.close();
})

export default app;