const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending endpoint
app.post('/send-order', async (req, res) => {
  const { orderDetails } = req.body; // Extract order details from the frontend request

  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other email services
    auth: {
      user: 'svnagdevesh03@gmail.com', // Your email here
      pass: 'Devesh@2003#',  // Your email password or app-specific password
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',  // Sender address
    to: 'owner-email@example.com',  // Receiver address (Owner's email)
    subject: 'New Order Confirmation', // Subject of the email
    text: `Order Details:\n${orderDetails}`,  // Body of the email (order details)
  };

  try {
    await transporter.sendMail(mailOptions); // Send email
    res.status(200).send('Order details sent to owner');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
