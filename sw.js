self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
    // API通信を妨害しないよう、キャッシュせず常にネットワークを優先
    e.respondWith(fetch(e.request));
});
