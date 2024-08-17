// Helper function to push messages to specified webhook url of slack channel
async function sendMessageToSlack(message) {
    try {
        if (!message) throw new Error('Message is required');
        // slack channel webhook url to send messages
        const url = process.env.SLACK_CHANNEL_URL;
        if (!url) throw new Error('Channel url not provided');
        console.log('Sending message to slack :', message);
        const payload = { text: message };
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        };
        let response = await fetch(url, requestOptions);
        if (response?.status === 200 && response?.statusText === 'OK') {
            console.log('Message sent');
        } else {
            console.log('Message sending failed');
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    sendMessageToSlack
}