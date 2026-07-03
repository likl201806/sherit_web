import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js';
import { getAnalytics, logEvent } from 'https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCM_dUbd_SU0Qd9IcU1B2uz7pq7MjtOYXk',
  authDomain: 'sherit-web.firebaseapp.com',
  projectId: 'sherit-web',
  storageBucket: 'sherit-web.firebasestorage.app',
  messagingSenderId: '270287439796',
  appId: '1:270287439796:web:0c27b5e01d57316ccb94e1',
  measurementId: 'G-1R7X0M7C5M'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.trackEvent = function(eventName, params) {
  logEvent(analytics, eventName, params || {});
};

window.trackPageView = function() {
  const page = document.body.dataset.page || 'unknown';
  logEvent(analytics, 'page_view_custom', { page_name: page });
};

document.addEventListener('DOMContentLoaded', function() {
  window.trackPageView();
});
