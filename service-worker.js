const CACHE_NAME = 'acidrain-game-v1';
const urlsToCache = [
    '/hamal/',
    '/hamal/index.html',
    '/hamal/manifest.json',
    'https://i.ibb.co/hQvwWZC/images.png',
    'https://i.ibb.co/hQvwWZC/images.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});
