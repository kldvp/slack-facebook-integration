# Slack Facebook Integration
Slack and Facebook integration

### Features:
- Automatically receives notifications in Slack whenever a message is received on a Facebook page.
- Forwards the received message to a designated Slack channel


# Setting up App

## Requirements

- **Facebook Page:** Will be used as the identity of your messaging experience. When people chat with your page we will track those events by webhook. To create a new Page, visit https://www.facebook.com/pages/create.
- **Facebook Developer Account:** Required to create new apps, You can create a new developer account by going to the [Facebook Developers website](https://developers.facebook.com/) and clicking the "Get Started" button.
- **Facebook App:** Create Facebook app to access pages messages by webhook url. To create a new facebook app, visit your [facebook app dashboard](https://developers.facebook.com/apps) and follow [steps](#setup-facebook-app)
- **Slack App:** Create slack app to push messages to specified slack channel, To create a new slack app, visit your [slack app dashboard](https://api.slack.com/apps) and follow [steps](#steps-to-create-slack-app)


## Install Dependencies

```sh
npm install
```

## Environment Variables
- Copy all environment variables from `.sample.env` to `.env` and provide the appropriate values:
    - `FB_WEBHOOK_VERIFY_TOKEN`: Provide a random string or any secret value.
    - `FB_APP_SECRET`: Provide the App Secret from the Facebook app you created.
    - `SLACK_CHANNEL_URL`: Provide the Slack webhook URL.


## Setup Steps

### Setup Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/apps/).
2. Click **"Create App"**.
3. For **"Which business portfolio do you want to connect to this app?"**, follow the default setting and click **"Next"**.
4. Select **"Other"** under **"Looking for something else?"** and click **"Next"**.
5. Select **"Business"** under the **"Select an app type"** section and click **"Next"**.
6. Add an app name as **"SlackMessageUpdates"** and click **"Create App"**.
7. Go to the **"Basic"** section under the **"App settings"** sub-navigation menu.
8. Get the App Secret and set it as the value for the `FB_APP_SECRET` environment variable.
9. Start the server:
    - Start the ngrok tunnel service:
      ```sh
      ngrok http 3000
      ```
    - Start the server:
      ```sh
      npm run start
      ```
10. Select **"Messenger"** under **"Add products to your app"** and click **"Set up"**.
11. Click **"Messenger API Settings"** under **"Messenger"**:
    - In the **"Configure Webhooks"** section:
      - Provide `<ngrok-url>/fb/webhook` for the **Callback URL** field.
      - Provide the `FB_WEBHOOK_VERIFY_TOKEN` environment variable value for the **Verify Token** field.
      - Click **"Verify and Save"**.
    - In the **"Generate Access Tokens"** section:
      - Click **"Connect"** and select the respective pages to connect this app.
      - After connecting the app to the specified page, click **"Add Subscription"** and select the **"messages"** checkbox.

### Steps to Create Slack App
1. Go to [Slack API](https://api.slack.com/apps).
2. Click **"Create New App"**.
3. Click **"From Scratch"**.
4. Provide an **"App Name"** (e.g., `SlackPushMessages`).
5. Select the workspace to deploy the app:
    - If you haven't created any workspace, please create one with the name `facebook-updates`.
    - If you have already created a workspace, select the created workspace to deploy the Slack app.
6. Click **"Create App"**.
7. Under the **"Features"** sub-navigation menu, select **"Incoming Webhooks"** and enable it.
8. Under the **"Features"** sub-navigation menu, select **"OAuth & Permissions"**:
    - Under the **"OAuth Tokens"** section, click **"Install to Workspace"**.
    - Select the workspace channel where you want to push messages, e.g., `fb-push-messages`.
    - Under **"Bot Token Scopes"**, click **"Add an OAuth Scope"**.
    - Add the **`chat:write`** scope to send messages to the channel.
9. Under the **"Features"** sub-navigation menu, select **"Incoming Webhooks"**:
    - Copy the webhook URL located in the **"Webhook URLs for Your Workspace"** section.


# References
- https://developers.facebook.com/docs/messenger-platform/webhooks/
- https://api.slack.com/quickstart
- https://developers.facebook.com/tools/debug/accesstoken