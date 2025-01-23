// smsService.js
const twilio = require('twilio');

// Twilio credentials from your account
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = new twilio(accountSid, authToken);

// Function to send SMS
const sendOrderConfirmationSMS = (phoneNumber, orderDetails) => {
  client.messages.create({
    body: `Order Confirmed: ${orderDetails}`,
    to: phoneNumber,  // Customer's phone number
    from: 'your_twilio_phone_number',  // Your Twilio phone number
  })
  .then((message) => console.log('SMS sent: ', message.sid))
  .catch((error) => console.error('Error sending SMS:', error));
};

module.exports = { sendOrderConfirmationSMS };
