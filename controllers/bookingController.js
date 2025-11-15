exports.crearReserva = (req, res) => {
  const { nombre, vueloId } = req.body;
  res.json({
    mensaje: 'Reserva creada exitosamente',
    nombre,
    vueloId
  });
};
