const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const reservationSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  numarClient: { // Adăugat acest câmp nou
    type: String, // Acesta poate fi String sau Number, în funcție de ce aștepți
    required: false,
  },
  customerName: {
    type: String,
    required: false,
  },
  date: {
    type: String, // Datele de programare sunt de tip String
    required: false,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  atvModel: {
    type: String,
    required: false,
  },
  sumaRon: { // Adăugat acest câmp nou
    type: Number, // Presupun că suma este de tip număr
    required: false,
  },
  telefon: { // Adăugat acest câmp nou
    type: String, // Telefonul este de tip string
    required: false,
  },
})

const Reservation = mongoose.model('Reservation', reservationSchema)

module.exports = Reservation
