self.addEventListener("install", () => {
    self.skipWaiting();
});
self.addEventListener("activate", () => {
    clients.claim();
});
self.addEventListener('fetch', (event) => {
    console.log(`Fetching : ${event.request.url}`);
});
self.addEventListener('error', (event) => {
    if (!window) {
        return;
    }
    if (!window.navigator) {
        return;
    }
    if (!window.navigator.vibrate) {
        return;
    }
    window.navigator.vibrate([200, 100, 200]);
});