import axios from 'axios';

export const sendNotification = async (message) => {
  const url = 'https://your-server-endpoint/send-notification'; // Replace with your backend endpoint

  try {
    await axios.post(url, { message });
  } catch (error) {
    console.error('Failed to send notification:', error);
  }
};
