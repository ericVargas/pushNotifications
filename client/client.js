const pubicVapidKey = 'BFcaAtEZv4JqzMp49mcz4D7cmH0q-wRbNXGfPjMFgBDTZMbyvxcWWf3NHP2loI91sY2KtYyc0YDOapfHIJDyV-E';

// Check for service worker
if('serviceWorker' in navigator) {
    send().catch(err => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {
    // Register Service Worker
    console.log('Registering service worker...');
    const register = await naigatior.serviceWorker.register('/worker.js', {
        scope: '/'
    });
    console.log('Sevice Worker Registered...');
    
    // Register Push
    console.log('Registering Push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey
    });
}

