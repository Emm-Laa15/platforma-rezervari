const createReservation = asyncHandler(async (req, res) => {
  const { product, start, end } = req.body;

  if (product) {
      res.status(400);
      throw new Error('Va rugam completati toate campurile');
  }

  const reservation = await Reservation.create({
      product,
      start,
      end,
      user: req.user.id,
  });

  res.status(201).json(reservation);
});

const getReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find({});
  res.json(reservations);
});

module.exports = {
  createReservation,
  getReservations,
};
