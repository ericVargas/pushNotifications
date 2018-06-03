const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const pubicVapidKey = 'BFcaAtEZv4JqzMp49mcz4D7cmH0q-wRbNXGfPjMFgBDTZMbyvxcWWf3NHP2loI91sY2KtYyc0YDOapfHIJDyV-E';
const privateVapidKey = 'JAiDq1N5roReOABJDoM_ubNvQyBNE0UZSd4cjVbULB0';

webpush.setVapidDetails('malto:test@test.com', pubicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription objct
    const subscription = req.body;
    
    // Send 201 - resource created
    res.status(201).json({});
    
    // Create payload
    const payload = JSON.stringify({ title: 'Push Test' });
    
    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});