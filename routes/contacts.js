const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

// Get all contacts
router.get('/', contactsController.getAllContacts);

// Get a specific contact by ID
router.get('/:id', contactsController.getContactById);

// Create a new contact
router.post('/', contactsController.createContact);

// Update an existing contact
router.put('/:id', contactsController.updateContact);

// Delete a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
