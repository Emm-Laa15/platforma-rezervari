const express = require('express')
const router = express.Router()
const Reservation = require('../models/reservationModel')
const multer = require('multer')
const upload = multer({ dest: 'tmp/csv/' })
const User = require('../models/userModel');
const verifyToken = require('../middleware/verifyToken');

const uploadController = require('../controllers/uploadCSVController')

const errorHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}


// Create a new reservation
router.post('/', errorHandler(async (req, res) => {
  const reservation = new Reservation({
    numarClient: req.body.numarClient,
    customerName: req.body.customerName,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    atvModel: req.body.atvModel,
    sumaRon: req.body.sumaRon,
    telefon: req.body.telefon,
  })
  console.log(reservation)
  const savedReservation = await reservation.save()
  res.status(201).json(savedReservation)
}))
//upload
router.post(
  '/upload',
  upload.single('file'),
  errorHandler(uploadController.uploadCsv)
);
// Get all reservations
router.get('/', async (_, res, next) => {
  try {
    const reservations = await Reservation.find({})
    res.json(reservations)
  } catch (error) {
    next(error)
  }
})

// Delete multiple reservations by ids
router.delete('/', async (req, res, next) => {
  try {
    const { ids } = req.body

    const deletedReservations = await Reservation.deleteMany({
      _id: { $in: ids },
    })

    if (deletedReservations.deletedCount === 0) {
      res.status(404)
      throw new Error('No reservations found')
    }

    res.json(deletedReservations)
  } catch (error) {
    next(error)
  }
})

// // Get a reservation by id
// router.get('/:id', async (req, res, next) => {
//   try {
//     const reservation = await Reservation.findById(req.params.id)
//     if (!reservation) {
//       res.status(404)
//       throw new Error('Reservation not found')
//     }
//     res.json(reservation)
//   } catch (error) {
//     next(error)
//   }
// })

// Update a reservation by id
router.put('/:id', async (req, res, next) => {
  try {
    const { customerName, date, startTime, endTime, atvModel } = req.body
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { customerName, date, startTime, endTime, atvModel },
      { new: true }
    )
    if (!updatedReservation) {
      res.status(404)
      throw new Error('Reservation not found')
    }
    res.json(updatedReservation)
  } catch (error) {
    next(error)
  }
})

// Delete a reservation by id
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(
      req.params.id
    )
    if (!deletedReservation) {
      res.status(404)
      throw new Error('Reservation not found')
    }
    res.json(deletedReservation)
  } catch (error) {
    next(error)
  }
})
router.post('/calend', async (req, res) => {
  const { atvModel, startTime, endTime, customerName, numarClient, sumaRon, telefon } = req.body;

  if (atvModel) {
    console.log(atvModel);
    console.log(startTime);

    console.log(endTime);
    console.log(customerName);
    console.log(numarClient);
    console.log(sumaRon);
    console.log(telefon)
  
    
  }

  try {
    const reservation = await Reservation.create({
      atvModel,
      startTime,
      endTime,
      customerName,
      numarClient,
      sumaRon,
      telefon,
      user: 'Test User',
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



router.get('/calendar', async (req, res) => {
  try {
    const reservations = await Reservation.find({});
    const formattedReservations = reservations.map(reservation => ({
      title: reservation.atvModel,
      start: reservation.startTime,
      end: reservation.endTime,
    }));
    console.log(formattedReservations);
    res.json(formattedReservations);
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({ message: 'A apărut o eroare la preluarea rezervărilor' });
  }
});







module.exports = router
