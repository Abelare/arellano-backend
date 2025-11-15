// utils/sendConfirmation.js

const sendConfirmation = (cliente, monto, metodo, referencia) => {
  return `✅ Pago procesado exitosamente\n👤 Cliente: ${cliente}\n💳 Método: ${metodo}\n💰 Monto: €${monto}\n🔖 Referencia: ${referencia}`;
};

module.exports = sendConfirmation;
