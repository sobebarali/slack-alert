# slack-alert

This is a simple script to send a message to a Slack channel using a incoming webhook of Slack API.
It will send a message to a channel when a SpamNotification is received

## API
### POST /test

This endpoint will send a alert message to the channel configured in the Slack API.

## Installation

- npm install
- npm start

## Deploy

- Register in Render.com
- Create a new web service
- Add a new environment variable `SLACK_WEBHOOK_UR` with the URL of the incoming webhook of Slack API
- Deploy the project




