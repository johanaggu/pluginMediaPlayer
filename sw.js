const VERSION = "v1"
self.addEventListener("install", (event) => {
    event.waitUntil(precache())
})

self.addEventListener("fetch", event => {
    const request = event.request;
    //get
    if (request.method != "GET") {
        return
    }
    //BUSCAR CACHE
    event.respondWith(cacheResponse(request))
    /* Actualizar cache */
    event.waitUntil(update_cache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        'index.html',
        '/assets/js/index.js',
        '/assets/js/MediaPlayer.js',
        '/assets/js/plugins/AutoPause.js',
        '/assets/js/plugins/AutoPlay.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

async function cacheResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await caches.match(request)
    return response || fetch(request)
}

async function update_cache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request);
    
    return cache.put(request, response)    
}