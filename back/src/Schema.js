const mongoose=require('mongoose')

const contactSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    asunto: { type: String, required: true },
    mensaje: { type: String, required: true },
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  module.exports = Contact