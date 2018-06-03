const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const pubicVapidKey = 'BFcaAtEZv4JqzMp49mcz4D7cmH0q-wRbNXGfPjMFgBDTZMbyvxcWWf3NHP2loI91sY2KtYyc0YDOapfHIJDyV-E';
const privateVapidKey = 'JAiDq1N5roReOABJDoM_ubNvQyBNE0UZSd4cjVbULB0';

webpush.setVapidDetails('malto:test@test.com', pubicVapidKey, privateVapidKey);
