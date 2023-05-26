const motoreta = require('../models/MotoretaModel')


// Obține toate rezervările
exports.getReservations = async (req, res, next) => {
    try {
        const reservations = await motoreta.find({});
        res.status(200).json(reservations);
    } catch (error) {
        next(error);
    }
}

// Creează o nouă rezervare
exports.createReservation = async (req, res, next) => {
    const newmotoreta = new motoreta({
        motoretaModel: req.body.motoretaModel,
        customerName: req.body.customerName,
        email: req.body.email,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sumaRon: req.body.sumaRon,
    });

    try { 
        console.log(newmotoreta);
        const savedReservation = await newmotoreta.save();

        res.status(201).json(savedReservation);
    } catch (error) {
        next(error);
    }
}

// Obține toate rezervările unui utilizator
exports.getUserReservations = async (req, res, next) => {
    try {
        const userReservations = await motoreta.find({ email: req.params.email});
        res.status(200).json(userReservations);
    } catch (error) {
        next(error);
    }
}


// Actualizează o rezervare existentă
exports.updateReservation = async (req, res, next) => {
    const reservationUpdate = {
        motoretaModel: req.body.motoretaModel,
        customerName: req.body.customerName,
        numarClient: req.body.numarClient,
        telefon: req.body.telefon,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sumaRon: req.body.sumaRon,
    };

    try {
        const updatedReservation = await motoreta.findByIdAndUpdate(req.params.id, reservationUpdate, { new: true });
        res.status(200).json(updatedReservation);
    } catch (error) {
        next(error);
    }
}

// Șterge o rezervare
exports.deleteReservation = async (req, res, next) => {
    try {
        await motoreta.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: 'Rezervarea a fost ștearsă cu succes' });
    } catch (error) {
        next(error);
    }
}
