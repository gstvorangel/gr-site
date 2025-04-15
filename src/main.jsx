import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import './index.css';

import Lenis from 'lenis';

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
