var express = require('express')
const app = require('../app')
var router = express.Router()
var userController= require('../controllers/userController')


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

router.post('/add',userController.saveStudent)

module.exports = router;
