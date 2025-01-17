import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { userSchema } from "../utils/validator/user.validator.js";
import { loginSchema } from "../utils/validator/user.validator.js";
import otpGenerator from "otp-generator";
import { sendEmail } from "../utils/email/nodemailer.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    //validation of input
    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      throw new Error(errorMessages.join(", "));
    }

    const { first_name, last_name, email, password } = value; // got input ffrom the user
    console.log("hello");
    //check for old users
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(409).json({
        message: "Email already exist",
      });
    }

    console.log("hello");
    const salt = await bcrypt.genSalt();

    //enrypt my password
    const hashedPassword = await bcrypt.hash(password, salt);

    // generate otp
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      otp,
    });

    // send email
    await sendEmail(email, otp);

    return res.status(201).json({
      message:
        "user created successfully, check your email to get your otp verification",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      throw new Error(errorMessages.join(", "));
    }
    //get user input email and password
    const { email, password } = value;

    //check if the email exist
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "email or password is incorrect",
      });
    }

    if (!user.is_verified) {
      return res.status(400).json({
        message: "user needs to be verified",
      });
    }

    //check if the password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: " password is incorrect",
      });
    }

    return res.status(200).json({
      message: "user logged in successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

  //create a token and give exp date
  // const accessToken = jwt.sign(
  //   { userId: User._id },
  //   appTokens.accessTokenSecret,
  //   {
  //     subject: "accessApi",
  //     expiresIn: appTokens.accessTokenExpiresIn,
  //   }
  // );

  // return res.status(200).json({
  //   id: user._id,
  //   email: user.email,
  //   fullName: user.firstName,
  //   accessToken,
  // });
};

export const verifyUser = async (req, res) => {
  try {
    //get otp from body
    const { otp } = req.body;

    //find otp of user in db and compare
    const user = await User.findOne({ otp });

    //throw if the user is not found
    if (!user) {
      return res.status(400).json({
        message: "wrong otp was inputted",
      });
    }

    //update is_verified field
    user.is_verified = true;

    // save the update to db
    await user.save();

    return res.status(200).json({
      message: "user has been verified successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const reset_url = `http://localhost:4150/auth/reset_password?token=${token}`;

    const isEmailSent = await sendEmail({
      to: email,
      subject: "Reset Password Notifcation",
      type: "resetPassword",
      data: { resetUrl: reset_url },
    });

    if (isEmailSent) {
      return res.status(200).json({
        message: "A reset link has been sent to your email",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// export const createUserWithValidation = async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;

//     if (!fullName || !email || !password) {
//       return res.status(400).json({
//         message: "Please fill all the required fields",
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(500).json({
//         message: "invalid email",
//       });
//     }

//     const userExist = await User.findOne({ email });
//     if (userExist) {
//       return res.status(400).json({
//         message: "Email already registered, please login instead",
//       });
//     }

//     const salt = await bcrypt.genSalt(10);

//     const hashPassword = await bcrypt.hash(password, salt);

//     const { token, activationCode } = createActivationToken({
//       fullName,
//       email,
//       password: hashPassword,
//     });

//     const emailData = { user: { fullName }, activationCode };

//     const templatePath = path.join(__dirname, "../mails/activation-mail.ejs");

//     const html = await ejs.renderFile(templatePath, emailData);
//     await User.create({
//       fullName,
//       email,
//       password: hashPassword,
//     });

//     await mailSent1({
//       email,
//       subject: "Email verification",
//       template: "activation-mail.ejs",
//       emailData,
//     });

//     res.status(201).json({
//       status: "success",
//       message: `please check your email ${email} to verify your account`,
//       activationToken: token,
//       activationCode,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "internal server error",
//     });
//   }
// };
