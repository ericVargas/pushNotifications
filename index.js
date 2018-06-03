const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

const publicVapidKey = 'BFcaAtEZv4JqzMp49mcz4D7cmH0q-wRbNXGfPjMFgBDTZMbyvxcWWf3NHP2loI91sY2KtYyc0YDOapfHIJDyV-E';
const privateVapidKey = 'JAiDq1N5roReOABJDoM_ubNvQyBNE0UZSd4cjVbULB0';

webpush.setVapidDetails('malto:test@test.com', publicVapidKey, privateVapidKey);

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

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));