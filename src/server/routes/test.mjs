//https://expressjs.com/en/guide/routing.html

import express from 'express';
const router = express.Router();

//Middle ware that is specific to this router
//router.use(function timeLog(req, res, next) {
  //console.log('Time: ', Date.now());
  //next();
//});

// define the name page route
router.get('/test', function (req, res) {
  res.send('test page')
})

export default router;