// Rozszerzenie globalnego obiektu Window
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Inicjalizacja, gdyby skrypt GTM się spóźnił
window.dataLayer = window.dataLayer || [];

export const pushToDataLayer = (eventName: string, payload?: Record<string, any>) => {
  window.dataLayer.push({
    event: eventName,
    ...payload
  });
};