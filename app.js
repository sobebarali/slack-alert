const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const webhookUrl = process.env.SLACK_WEBHOOK_URL;
const slack = require('slack-notify')(webhookUrl);

const app = express();
app.use(bodyParser.json());

app.post('/test', (req, res) => {
    const { Email, Type } = req.body;
    if (Type === "SpamNotification") {
        slack.send("Spam detected from " + Email).then(() => {
            console.log('Message sent');
        }).catch((err) => {
            console.log('Error sending message', err);
        });
    }
    res.status(200).json({ message: 'OK' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});