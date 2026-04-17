const Contact = require("../models/Contact");
const { v4: uuidv4 } = require("uuid");

// CREATE CONTACT
exports.createContact = async (req, res) => {
  try {
    const { nom, prenom, telephone, email, profession, image } = req.body;

    // validation
    if (!nom || !prenom || !telephone) {
      return res.status(400).json({ message: "Champs obligatoires manquants" });
    }

    const newContact = new Contact({
      uuid: uuidv4(),
      nom,
      prenom,
      telephone,
      email,
      profession,
      image,
    });

    await newContact.save();

    res.status(201).json({
      id: newContact.uuid,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// GET CONTACT BY UUID
exports.getContact = async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findOne({ uuid: id });

    if (!contact) {
      return res.status(404).json({ message: "Contact non trouvé" });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};
