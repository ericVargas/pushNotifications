console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Recieved...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Eric Vargas!',
        icon: 'https://raw.githubusercontent.com/ericVargas/Portfolio/master/img/favicon/squareShort.png?token=APY6_pJwHRFTQFSjLp_IgoQ7RVa4lfylks5bHMm6wA%3D%3D'
    });
});