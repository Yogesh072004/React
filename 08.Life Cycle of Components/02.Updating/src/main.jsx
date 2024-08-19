// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header'; // Ensure the path matches the location of your file

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Header  />
  </StrictMode>
);
