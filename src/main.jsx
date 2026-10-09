import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import App from './App.jsx';
import './styles.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App page={document.body.dataset.page || 'home'} />
  </StrictMode>
);
