const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const webhookUrl = process.env.SLACK_WEBHOOK_URL;
const slack = require("slack-notify")(webhookUrl);

const app = express();
app.use(bodyParser.json());

app.post("/test", (req, res) => {
  const { Email, Type } = req.body;
  try {
    if (Type === "SpamNotification") {
      slack
        .send("Spam detected from " + Email)
        .then(() => {
          console.log("Message sent");
        })
        .catch((err) => {
          console.log("Error sending message", err);
          res.status(500).json({ error: "Error sending message" });
        });
    } else {
      res.status(400).json({ error: "Invalid request type" });
    }
  } catch (err) {
    console.log("Error handling request", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
