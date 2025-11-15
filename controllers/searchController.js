exports.buscar = (req, res) => {
  const { destino, fecha } = req.query;

  // Simulación de resultados
  const resultados = [
    {
      vueloId: 'MAD-LIM-2025',
      aerolinea: 'LATAM',
      precio: 450,
      fechaSalida: fecha || '2025-12-01',
      destino: destino || 'Lima'
    },
    {
      vueloId: 'MAD-BOG-2025',
      aerolinea: 'Avianca',
      precio: 420,
      fechaSalida: fecha || '2025-12-01',
      destino: destino || 'Bogotá'
    }
  ];

  res.json({
    mensaje: 'Resultados de búsqueda simulados',
    resultados
  });
};
