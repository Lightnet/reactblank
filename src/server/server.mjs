
// https://nanojsx.github.io/

import express from "express";

const app = express()
const port = 3000;

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send(
    '<script src="/bundle.js"></script>'
  )
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGTERM',()=>{
  server.close();
})

export default app;