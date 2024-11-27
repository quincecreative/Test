self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/Test/",
          "/Test/index.html",
          "/Test/index.js",
          "/Test/style.css",
          "/Test/images/fox1.jpg",
          "/Test/images/fox2.jpg",
          "/Test/images/fox3.jpg",
          "/Test/images/fox4.jpg",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
