// Service Worker super leve apenas para habilitar a instalação PWA
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Não faz cache forçado para garantir que seus dados no dashboard estejam sempre 100% atualizados ao vivo
});
