const express = require('express');
const router = express.Router();
const { addSubscriber } = require('./dbConnection');

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    const result = await addSubscriber(email);
    console.log(`Subscriber added successfully: ${email}`);
    res.json({ success: true, message: 'Subscription successful', id: result });
  } catch (error) {
    console.error("Error in subscription:", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;