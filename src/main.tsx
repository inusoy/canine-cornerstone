import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Rejestracja Service Worker dla cachowania
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker zarejestrowany pomyślnie:', registration);
      })
      .catch(error => {
        console.log('Błąd podczas rejestracji Service Worker:', error);
      });
  });
}

createRoot(document.getElementById("root")!).render(<App />);
