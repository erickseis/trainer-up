import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio';
import './App.css';
import Trainers from './components/trainers';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/trainers' element={<Trainers />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
