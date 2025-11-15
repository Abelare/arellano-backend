const sgMail = require('@sendgrid/mail');

// Reemplaza con tu clave API real de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, nombre, monto, metodo, referencia) => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <div style="text-align: center;">
        <img src="https://arellanotravel.com/assets/logo.png" alt="Arellano Travel" style="max-width: 180px; margin-bottom: 20px;">
      </div>
      <h2 style="color: #007BFF;">✅ Confirmación de pago</h2>
      <p>Hola <strong>${nombre}</strong>,</p>
      <p>Hemos recibido tu pago correctamente. Aquí tienes los detalles:</p>
      <ul style="line-height: 1.6;">
        <li><strong>💳 Método:</strong> ${metodo}</li>
        <li><strong>💰 Monto:</strong> €${monto}</li>
        <li><strong>🔖 Referencia:</strong> ${referencia}</li>
      </ul>
      <p>Gracias por confiar en <strong>Arellano Travel</strong>.</p>
      <hr style="margin: 30px 0;">
      <p style="font-size: 0.9em; color: #777;">
        Este es un mensaje automático. Si tienes alguna duda, responde a este correo o contáctanos en nuestras redes.
      </p>
    </div>
  `;

  const msg = {
    to, 'mati031292@gmail.com',
    from: 'arellanotravel1@gmail.com', // Este correo debe estar verificado en SendGrid
    subject,
    html: htmlContent
  };

  try {
    await sgMail.send(msg);
    console.log('📧 Email enviado a', to);
  } catch (error) {
    console.error('❌ Error al enviar email:', error.response?.body || error.message);
  }
};

module.exports = sendEmail;
console.error('🔍 Error completo:', error.response?.body || error);
