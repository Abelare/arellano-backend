const sendEmail = require('../utils/emailSender');

exports.enviarMensaje = async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  try {
    await sendEmail('arellanotravel1@gmail.com', 'Nuevo mensaje de contacto', nombre, mensaje, 'Contacto Web', 'N/A');
    res.json({ mensaje: '✅ Mensaje enviado correctamente' });
  } catch (error) {
    console.error('❌ Error al enviar mensaje:', error.message);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
};
