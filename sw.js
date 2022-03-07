// Install the ServiceWorker
self.addEventListener('install', function(event) {
  event.waitUntil(

    // Open a cache
    caches.open('v4').then(function(cache) {

      // Define what we want to cache
      return cache.addAll([
        '/circular-waveform-visualizer/index.html',
        '/circular-waveform-visualizer/manifest.json',
        '/circular-waveform-visualizer/assets/favicon.ico',
        '/circular-waveform-visualizer/assets/android-chrome-512x512.png',
      ]);
    })
  );
});

// Use ServiceWorker (or not) to fetch data
self.addEventListener('fetch', function(event) {

  event.respondWith(

    // Look for something in the cache that matches the request
    caches.match(event.request).then(function(response) {

      // If we find something, return it
      // Otherwise, use the network instead
      return response || fetch(event.request);
    })
  );
});
