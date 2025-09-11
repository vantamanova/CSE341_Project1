const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
  //#swagger.tags=["Contacts"];
  try {
    const db = mongodb.getDatabase();
    const contacts = await db.collection('contacts').find().toArray();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getContactById = async (req, res) => {
  //#swagger.tags=["Contacts"];
  const contactId = new ObjectId(req.params.id);
  try {
    const db = mongodb.getDatabase();
    const contacts = await db.collection('contacts').find({ _id: contactId }).toArray();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createContact = async (req, res) => {
  //#swagger.tags=["Contacts"];
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  try {
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').insertOne(user);

    // Instead of result.ops[0], just return the inserted document with its new id
    res.status(201).json({ ...user, _id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateContact = async (req, res) => {
  //#swagger.tags=["Contacts"];
  const contactId = new ObjectId(req.params.id);
  const updatedData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  try {
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').updateOne({ _id: contactId }, { $set: updatedData });
    if (result.modifiedCount === 1) {
      res.status(200).json({ message: 'Contact updated successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteContact = async (req, res) => {
  //#swagger.tags=["Contacts"];
  const contactId = new ObjectId(req.params.id);
  try {
    const db = mongodb.getDatabase();
    const result = await db.collection('contacts').deleteOne({ _id: contactId });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
