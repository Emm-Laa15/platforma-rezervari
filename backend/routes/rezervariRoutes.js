const express = require('express');
const router = express.Router();
const atvController = require('../controllers/atvController');

router.get('/', atvController.getReservations);
router.post('/', atvController.createReservation);
router.put('/:id', atvController.updateReservation);
router.delete('/:id', atvController.deleteReservation);
router.get('/:email', atvController.getUserReservations);

module.exports = router;
