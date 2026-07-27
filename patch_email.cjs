const fs = require('fs');
let code = fs.readFileSync('api/_utils/email.ts', 'utf8');
code = code.replace(
  "await transporter.sendMail(mailOptions);",
  `await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Nodemailer error:", err);
        reject(err);
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });`
);
fs.writeFileSync('api/_utils/email.ts', code);
