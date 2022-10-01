const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
  console.log('Authentication: true')
  next()
})


/* GET home page. */
router.get('/', (req, res) => {
  res.send('Index')
});



module.exports = router;
