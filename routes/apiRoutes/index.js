const express = require('express');
const router = express.Router();

// connects the modules to the main file
router.use(require('./candidatesRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;