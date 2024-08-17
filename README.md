# slack-facebook-integration
Slack And Facebook integration

# Setting up App

## Requirements

- **Facebook Page:** Will be used as the identity of your messaging experience. When people chat with your page we will track those events by webhook. To create a new Page, visit https://www.facebook.com/pages/create.
- **Facebook Developer Account:** Required to create new apps, You can create a new developer account by going to the [Facebook Developers website](https://developers.facebook.com/) and clicking the "Get Started" button.
- **Facebook App:** Create Facebook app to access pages messages by webhook url. To create a new facebook app, visit your [facebook app dashboard](https://developers.facebook.com/apps).
- **Slack App:** Create slack app to push messages to specified slack channel, To create a new slack app, visit your [slack app dashboard](https://api.slack.com/apps) and follow [steps](#steps-to-create-slack-app)



## Setup Steps

Before you begin, make sure you have completed all of the requirements listed above. At this point you should have a Page and a registered Facebook App.

#### Get the App id and App Secret

1. Go to your app Basic Settings, [Find your app here](https://developers.facebook.com/apps)
2. Save the **App ID** number and the **App Secret**

#### Grant  Messenger access to your Facebook App

1. Go to your app Dashboard
2. Under _Add Product_ find _Messenger_ and click _Set Up_
3. Now you should be in the App Messenger Settings
4. Under Access Tokens, click on _Add or Remove Pages_
5. Select the desired page and allow "Manage and access Page conversations" in Messenger
6. Select the desired page and an access token should appear
7. Get the Page ID from the page access token by using the [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
8. In the section Built-In NLP, select your page and enable the toggle

# Usage

## Using ngrok
1. Install

## Setup Slack App
 - go to https://api.slack.com/quickstart
 - follow instructions mentioned in this guide to create an app

### Steps to create Slack App
- go to https://api.slack.com/apps
- click "Create New App"
- click "From scratch"
- Give "App Name" (SlackPushMessages)
- Select workspace to deploy app
    - If you haven't created any workspace, please create one with name (facebook-updates)
    - If you already created workspace, select created workspace to deploy slack app
- Click "Create App"
- Under "Features" sub navigation menu select "Incoming Webhooks" and enable it.
- Under "Features" sub navigation menu select "OAuth & Permissions"
    - Under "OAuth Tokens" section click "install to facebook-updates" workspace
    - Select workspace channel where we want to push messages for eg. "fb-push-messages"
    - Select "Bot Token Scopes" and click "Add an OAuth Scope"
    - Add "chat:write" scope to send messages to channel
- Under "Features" sub navigation menu select "Incoming Webhooks"
    - Copy webhook url located at "Webhook URLs for Your Workspace" section

# References
- https://developers.facebook.com/docs/messenger-platform/webhooks/
- https://api.slack.com/quickstart#creating
- https://developers.facebook.com/tools/debug/accesstoken

- ngrok http --domain=mudfish-organic-yearly.ngrok-free.app 80
 https://mudfish-organic-yearly.ngrok-free.app