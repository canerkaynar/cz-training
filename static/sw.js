const CACHE_NAME = "simple-cache-v1";
const urlsToCache = [
  "/"
];

self.addEventListener("install", event => {
  const preLoaded = caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache));
  event.waitUntil(preLoaded);
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }),
  );
});
