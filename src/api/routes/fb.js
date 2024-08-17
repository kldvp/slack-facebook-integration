const express = require('express');

const {
    verifyWebHook,
    processWebHookData
} = require('../controllers/fb');

const router = express.Router();

// Add support for GET requests to our webhook
router.get("/webhook", verifyWebHook);

// Process webhook data
router.post("/webhook", processWebHookData);

module.exports = router;