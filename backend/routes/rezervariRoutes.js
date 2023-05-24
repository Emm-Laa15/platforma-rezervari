const express = require('express');
const router = express.Router();
const atvController = require('../controllers/atvController');
const ebikeController = require('../controllers/ebikesController');
const motoretaController = require('../controllers/motoretaController');
const motocicletaController = require('../controllers/motocicletaController');


router.get('/atv', atvController.getReservations);
router.post('/atv', atvController.createReservation);
router.put('/atv/:id', atvController.updateReservation);
router.delete('/atv/:id', atvController.deleteReservation);
router.get('/atv/user/:email', atvController.getUserReservations);


router.get('/ebikes', ebikeController.getReservations);
router.post('/ebikes', ebikeController.createReservation);
router.put('/ebikes/:id', ebikeController.updateReservation);
router.delete('/ebikes/:id', ebikeController.deleteReservation);
router.get('/ebikes/user/:email', ebikeController.getUserReservations);


router.get('/motoreta', motoretaController.getReservations);
router.post('/motoreta', motoretaController.createReservation);
router.put('/motoreta/:id', motoretaController.updateReservation);
router.delete('/motoreta/:id', motoretaController.deleteReservation);
router.get('/motoreta/user/:email', motoretaController.getUserReservations);


router.get('/motocicleta', motocicletaController.getReservations);
router.post('/motocicleta', motocicletaController.createReservation);
router.put('/motocicleta/:id', motocicletaController.updateReservation);
router.delete('/motocicleta/:id', motocicletaController.deleteReservation);
router.get('/motocicleta/user/:email', motocicletaController.getUserReservations);

module.exports = router;
