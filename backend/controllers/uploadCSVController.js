const asyncHandler = require('express-async-handler');
const Reservation = require('../models/reservationModel');
const csv = require('csv-parser');
const fs = require('fs');
const moment = require('moment');

const uploadCsv = asyncHandler(async (req, res) => {
  console.log('req file:', req.file);

  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv({ separator: ';' })) 
    .on('error', (error) => console.error('Error:', error))
    .on('data', (data) => {
        console.log('Data from CSV:', data); 
      
        
        const reservation = {
          numarClient: data['Nr'] ? data['Nr'] : 0 , 
          customerName: data['nume-prenume'],
          date: moment(data['data-rezervare'], 'DD.MM.YYYY').format(),
          startTime: moment(data['data-ora-inceput-rezervare'], 'DD.MM.YYYY-HH:mm').format(),
          endTime: moment(data['data-ora-sfarsit-rezervare'], 'DD.MM.YYYY-HH:mm').format(),
          atvModel: data['denumire-echipament'],
          sumaRon: data['valoare'],
          telefon: data['telefon'],
        };
        
        console.log('inainte sa salvez:', reservation); 
      
        results.push(reservation);
      })
    .on('end', async () => {
      try {
        await Reservation.insertMany(results);
        console.log('Date dupa save:', results); 

        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
        res.status(201).json(results);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .json({ message: 'a aparut eroare la salvarea datelor' });
      }
    });
});

module.exports = {
  uploadCsv,
};
