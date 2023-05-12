const nodemailer = require("nodemailer");
exports.sendEmail = async (email, otp) => {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      },
    })
    await transport.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Seaport Password",
      text:"" ,
      html: `<h4>Your password is:<h4><h2>${otp}<h2>`,
  })
  
  }