const express = require('express')

const router = express.Router()
const instructorRouter = require('./instructor-router')
const studentRouter = require('./student-router')

router.use(function timeLog(req, res, next) {
  console.log(
    "Time: ",
    new Date().toISOString() + " - " + req.method + " - " + req.originalUrl
  );
  next();
});

router.use('/instructor', instructorRouter)
router.use('/student', studentRouter)

module.exports = router