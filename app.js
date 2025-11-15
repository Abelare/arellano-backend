require('dotenv').config();
const express = require('express');
const cors = require('cors');

console.log('🟢 Inicializando servidor...');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/search', require('./routes/searchRoutes'));
console.log('✔ searchRoutes cargado');

app.use('/api/bookings', require('./routes/bookingRoutes'));
console.log('✔ bookingRoutes cargado');

app.use('/api/payments', require('./routes/paymentRoutes'));
console.log('✔ paymentRoutes cargado');

// Ruta raíz para verificar estado del servidor
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando 💻');
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});

// Captura de errores no controlados
process.on('uncaughtException', (err) => {
  console.error('❌ Error no capturado:', err);
});
