let express = require('express');
let router = express.Router();
const {index,detalle} = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);

/* GET detalle page. */
router.get('/detalle/:id', detalle);

module.exports = router;
