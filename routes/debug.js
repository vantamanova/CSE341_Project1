// routes/debug.js
const router = require('express').Router();
const { getDatabase } = require('../data/database');

router.get('/db', async (req, res) => {
  try {
    const db = getDatabase();
    const collections = await db.listCollections().toArray();
    const count = await db
      .collection('contacts')
      .countDocuments()
      .catch(() => -1);
    res.json({
      databaseName: db.databaseName,
      collections: collections.map((c) => c.name),
      contactsCount: count
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
