const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: String,
      required: [true, 'Vă rugăm selectați un produs'],
      enum: ['ATV1', 'ATV2', 'ATV3', 'ATV4', 'BIKE1', 'BIKE2'],
    },
    atvModel: {
      type: String,
      required: function () {
        return this.product === 'ATV1'
      },
      enum: ['ATV1', 'ATV2', 'ATV3', 'ATV4', 'BIKE1', 'BIKE2'],
    },
    startTime: {
      type: Date,
      required: function () {
        return this.product === 'ATV1'
      },
    },
    endTime: {
      type: Date,
      required: function () {
        return this.product === 'ATV1'
      },
    },
    customerName: {
      type: String,
      required: function () {
        return this.product === 'ATV1'
      },
    },
    numarClient: {
      type: String,
      required: function () {
        return this.product === 'ATV1'
      },
    },
    sumaRon: {
      type: Number,
      required: function () {
        return this.product === 'ATV1'
      },
    },
    telefon: {
      type: String,
      required: function () {
        return this.product === 'ATV1'
      },
    },
  },
  {
    timestamps: true,
  }
)

