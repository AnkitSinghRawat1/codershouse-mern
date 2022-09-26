const otpService = require("../services/otp-service");
const hashService = require("../services/hash-service");
const UserService = require("../services/user-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service");
const UserDto = require('../dtos/user-dto')
 
class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;

    // if phone Number is missing
    if (!phone) {
      res.status(400).json({
        message: "Phone is Required !",
      });
    }

    // generating OTP
    const otp = await otpService.generateOtp();

    // ttl - time to leave
    const ttl = 1000 * 60 * 2; // 2 minutes

    const expires = Date.now() + ttl;

    const data = `${phone}.${otp}.${expires}`;

    // hashing
    const hash = hashService.hashOtp(data);

    // send OTP
    try {
      // await otpService.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
        otp
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "message sending failed" });
    }

    res.status(200).json({ hash: hash });
  }

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;

    if (!otp || !hash || !phone) {
      res.status(400).json({
        message: "All fields are required !",
      });
    }

    const [hashedOtp, expires] = hash.split(".");

    if (Date.now > +expires) {
      res.status(400).json({
        message: "OTP Expired!",
      });
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp, data);

    if (!isValid) {
      res.status(400).json({
        message: "invalid OTP",
      });
    }

    let user;

    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "DB Error",
      });
    }

    // jwt token

    const { accessToken, refreshToken } = tokenService.generateAccessTokens({
      _id: user._id,
      activated: false
    });

    await tokenService.storeRefreshToken(refreshToken, user._id)    

    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    const userDto = new UserDto(user)

    res.json({
      user: userDto,
      auth: true
    });
  }
}

module.exports = new AuthController();
