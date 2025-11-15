const sendEmail = require('../utils/emailSender');

exports.procesarPago = async (req, res) => {
  const { nombre, monto, metodo, email } = req.body;
  const referencia = 'PAY-' + Date.now();

  try {
    await sendEmail(email, 'Confirmación de pago', nombre, monto, metodo, referencia);
    console.log('📧 Email enviado a', email);

    res.json({
      mensaje: `✅ Pago procesado exitosamente\n👤 Cliente: ${nombre}\n💳 Método: ${metodo}\n💰 Monto: €${monto}\n🔖 Referencia: ${referencia}`,
      nombre,
      monto,
      metodo,
      estado: 'confirmado',
      referencia
    });
  } catch (error) {
    console.error('❌ Error al enviar email:', error.message);
    res.status(500).json({ error: 'Error al procesar el pago o enviar el correo' });
  }
};
