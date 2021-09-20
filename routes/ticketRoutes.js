const {Router} = require('express');
const {reserving , sendReservedTime} = require('../controller/ticketController');
const {checkDate} = require('../middlewares/checkDate');

const router = new Router();

// @desc  reserving ticket
// @route post/reserving
router.post("/reserving" ,checkDate , reserving);

// @desc  send reserved sanse
// @route post/reserved-time
router.post('/reserved-time' , sendReservedTime);


module.exports = router

