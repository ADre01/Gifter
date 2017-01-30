var express = require('express');
var router = express.Router();
var checkAuthenticated = require('../services/checkAuthenticated');
var listsCtrl = require('../controllers/lists.controller');

/* GET home page. */
router.get('/', checkAuthenticated, listsCtrl.getList);
router.post('/', checkAuthenticated, listsCtrl.addToList);
router.delete('/:id', checkAuthenticated, listsCtrl.deleteItem);
router.get('/:user/list', listsCtrl.getUserList);
router.put('/:id', listsCtrl.updateItem);

module.exports = router;
