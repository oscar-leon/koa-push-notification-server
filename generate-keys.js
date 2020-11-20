const webpush = require("web-push")

const vapidKeys = webpush.generateVAPIDKeys();

console.log("keys to populate the .env:", vapidKeys);
