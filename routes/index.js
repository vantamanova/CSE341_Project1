const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/contacts', require('./contacts'));
router.use('/debug', require('./debug'));

module.exports = router;
