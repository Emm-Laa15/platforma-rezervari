const express = require('express');
const router = express.Router();
const atvController = require('../controllers/atvController');
const ebikeController = require('../controllers/ebikesController');

router.get('/atv', atvController.getReservations);
router.post('/ebikes', ebikeController.createReservation);
router.post('/', atvController.createReservation);
router.put('/:id', atvController.updateReservation);
router.delete('/:id', atvController.deleteReservation);
router.get('/:email', atvController.getUserReservations);

module.exports = router;
