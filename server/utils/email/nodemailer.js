import nodemailer from "nodemailer";

// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ireneqomoregbee@gmail.com",
    pass: "ajnfebpevnjeiyal", // Use environment variables for security
  },
});

/**
 * Unified sendEmail function
 * @param {string} to - Recipient email address.
 * @param {string} subject - Subject of the email.
 * @param {string} type - Type of email (otp, resetPassword, general).
 * @param {object} data - Data for dynamic content in the email.
 *    For OTP: { otp: string }
 *    For Reset Password: { resetUrl: string }
 *    For General: { content: string }
 */
export const sendEmail = async ({to, subject, type, data}) => {
  let emailContent;

  switch (type) {
    case "otp":
      emailContent = `<p>Your OTP code is: <strong>${data}</strong></p>`;
      break;

    case "resetPassword":
      emailContent = `<p>Click <a href="${data}" target="_blank">here</a> to reset your password.</p>`;
      break;

    case "general":
      emailContent = `<p>${data}</p>`;
      break;

    default:
      throw new Error("Invalid email type specified.");
  }

  const mailOptions = {
    from: "ireneqomoregbee@gmail.com",
    to,
    subject,
    html: emailContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
