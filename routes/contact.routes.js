const express = require("express");
const router = express.Router();
const controller = require("../controllers/contact.controller");

// POST /api/contacts
router.post("/", controller.createContact);

// GET /api/contacts/:id
router.get("/:id", controller.getContact);

module.exports = router;
