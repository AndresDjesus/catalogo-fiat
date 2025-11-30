import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@mantine/core/styles.css';
import '@mantine-carousel/styles.css'; 
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. MantineProvider envuelve toda la App */}
    <MantineProvider defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);