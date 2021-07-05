const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  return new Promise((resolve, reject) => {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
    const { name, email, phone, street, city, msg, timeOfQuote, dateOfQuote } =
      req.body;

    const newDateOfQuote = new Date(dateOfQuote);

    let safeMsg = msg;

    safeMsg = safeMsg.replace(/<style([\s\S]*?)<\/style>/gi, "");
    safeMsg = safeMsg.replace(/<script([\s\S]*?)<\/script>/gi, "");
    safeMsg = safeMsg.replace(/<\/div>/gi, "\n");
    safeMsg = safeMsg.replace(/<\/li>/gi, "\n");
    safeMsg = safeMsg.replace(/<li>/gi, "  *  ");
    safeMsg = safeMsg.replace(/<\/ul>/gi, "\n");
    safeMsg = safeMsg.replace(/<\/p>/gi, "\n");
    safeMsg = safeMsg.replace(/<br\s*[\/]?>/gi, "\n");
    safeMsg = safeMsg.replace(/<[^>]+>/gi, "");

    const mail = {
      personalizations: [
        {
          to: "raymond.f.kneipp@gmail.com",
          subject: "Client Estimate",
        },
        {
          to: email,
          subject: "Drainage Estimate",
        },
      ],
      from: "Plus Drainage <notification@raymondkneipp.com>",
      text: `Cost: Free\nDuration: 1 hour\nDate: ${
        newDateOfQuote.getMonth() + 1
      } / ${newDateOfQuote.getDate()} / ${newDateOfQuote.getFullYear()}\nTime: ${timeOfQuote}\nName: ${name}\nEmail: ${email}\nPhone Number: ${
        phone || "Not Provided"
      }\nAddress: ${street} ${city}, Ohio\nMessage: ${
        safeMsg || "Not Provided"
      }`,
      html: `
      <h1>Plus Drainage</h1>
			<h2>Drainage Service Quote</h2>
			<p><strong>Cost:</strong> Free</p>
			<p><strong>Duration:</strong> 1 hour</p>
			<p><strong>Date:</strong> ${
        newDateOfQuote.getMonth() + 1
      } / ${newDateOfQuote.getDate()} / ${newDateOfQuote.getFullYear()}</p>
			<p><strong>Time:</strong> ${timeOfQuote}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone || "Not Provided"}</p>
      <p><strong>Address:</strong> ${street} ${city}, Ohio</p>
      <p><strong>Message:</strong> ${safeMsg || "Not Provided"}</p>
    `,
    };

    sgMail
      .send(mail)
      .then((res) => {
        res.status(200).end();
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        return resolve();
      });
  });
}
