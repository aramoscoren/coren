self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/corenspteste/',
       '/corenspteste/index.html',
       '/corenspteste/index.js',
       '/corenspteste/style.css',
       '/corenspteste/images/fox1.jpg',
       '/corenspteste/images/fox2.jpg',
       '/corenspteste/images/fox3.jpg',
       '/corenspteste/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
