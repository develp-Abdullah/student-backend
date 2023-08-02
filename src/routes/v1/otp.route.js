const express = require('express');
const auth = require('../../middlewares/auth');
const otpController = require('../../controllers/otp.controller');
const router = express.Router();

router.route('/:phone').post(otpController.createOtp);

module.exports = router;
