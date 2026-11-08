self.addEventListener('install', (e) => {
  console.log('[Service Worker] Uygulama Kuruldu');
});
self.addEventListener('fetch', (e) => {
  // Brave tarayıcısını "çevrimdışı çalışabiliyor" diye kandıran boş yakalayıcı
});
