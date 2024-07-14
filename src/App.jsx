import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
