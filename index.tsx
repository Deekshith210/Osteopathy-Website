import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNstfCpV9tzwGMg9TlbQNzM53sHbpMG3Q",
  authDomain: "bhuvan-osteopath.firebaseapp.com",
  projectId: "bhuvan-osteopath",
  storageBucket: "bhuvan-osteopath.firebasestorage.app",
  messagingSenderId: "251244406082",
  appId: "1:251244406082:web:4ae2623208f72abb6b14db",
  measurementId: "G-RBE1W3GJGK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);