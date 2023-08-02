const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const otp = require('../middlewares/otp');

const createOtp = catchAsync(async (req, res) => {
  const otpsend = await otp.sendOtp(req.params.phone);
  res.status(httpStatus.CREATED).send(otpsend);
});

const verifyOtp = catchAsync(async (req, res) => {
  const otpver = await otp.verifyOtp(req.params.session, req.body);
  res.status(httpStatus.CREATED).send(otpver);
});
module.exports = {
  createOtp,
  verifyOtp,
};
