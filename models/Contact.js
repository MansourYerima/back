const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  uuid: { type: String, required: true, unique: true },

  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  telephone: { type: String, required: true },
  email: { type: String },
  profession: { type: String },

  image: { type: String }, // base64

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
