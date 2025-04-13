// Nazwa cache, którą będziemy używać
const CACHE_NAME = 'szczek-szczek-cache-v1';

// Lista zasobów, które chcemy zapisać w pamięci podręcznej
const urlsToCache = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/og-image.png',
  '/placeholder.svg',
  '/fonts/BryndanWriteBook-nGPM.ttf',
  // Główne style i skrypty aplikacji będą dodane automatycznie
];

// Instalacja Service Workera
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache został otwarty');
        return cache.addAll(urlsToCache);
      })
  );
});

// Nasłuchiwanie na żądania sieciowe
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - zwracamy odpowiedź z cache
        if (response) {
          return response;
        }

        // Klonujemy zapytanie, ponieważ jest to stream który może być użyty tylko raz
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Sprawdzamy czy otrzymaliśmy prawidłową odpowiedź
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Klonujemy odpowiedź, ponieważ jest to stream który może być użyty tylko raz
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // Nie cache'ujemy zapytań API ani zewnętrznych zasobów
                if (!event.request.url.includes('/api/') && 
                    event.request.url.startsWith(self.location.origin)) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          }
        );
      })
  );
});

// Aktualizacja Service Workera - czyszczenie starych cache
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Usuwamy stare cache
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});