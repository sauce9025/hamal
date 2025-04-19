const CACHE_NAME = 'acidrain-game-v1';
const urlsToCache = [
    '/hamal/',
    '/hamal/index.html',
    '/hamal/manifest.json',
    'https://i.ibb.co/mVDd3y4g/maskable-icon-x192.png',
    'https://i.ibb.co/dJp5Lj9K/maskable-icon-x512.png'
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
