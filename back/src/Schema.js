const mongoose=require('mongoose')

const contactSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    telefono: { type: Number, required: true },
    mensaje: { type: String, required: true },
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  module.exports = Contact