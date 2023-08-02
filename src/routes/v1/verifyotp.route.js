const express = require('express');
const auth = require('../../middlewares/auth');
const otpController = require('../../controllers/otp.controller');
const router = express.Router();

router.route('/:session').get(otpController.verifyOtp);

module.exports = router;
