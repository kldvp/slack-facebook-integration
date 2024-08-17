const { sendMessageToSlack } = require('../../services/slack');

// Verify FB webhook
async function verifyWebHook(req, res) {
    // Parse the query params
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === process.env.FB_WEBHOOK_VERIFY_TOKEN) {
            // Respond with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            res.status(200).send(challenge);
        } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
}

async function processWebHookData(req, res) {
    let body = req.body;

    console.log(`\u{1F7EA} Received webhook:`);
    console.dir(body, { depth: null });

    // Check if this is an event from a page subscription
    if (body.object === "page") {
        body.entry.forEach((entry) => {
            entry.messaging.forEach((record) => {
                if (record?.message?.text) {
                    sendMessageToSlack(record.message.text);
                }
            });
        });
        // Returns a '200 OK' response to all requests
        res.status(200).send("EVENT_RECEIVED");
    } else {
        // Return a '404 Not Found' if event is not from a page subscription
        console.log('not from page subscription');
        res.sendStatus(404);
    }
}


module.exports = {
    verifyWebHook,
    processWebHookData
}