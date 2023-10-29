import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import UploadPage from '../src/pages/uploadpage/upload.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Main />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// Make it so that when you click each "aside" video it passes the ID back to the route and reloades the page after
// revrieving the data for the new video from the API.