import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import Upload from './components/Upload';
import Res from './components/Res';
import Header from './components/Header';

import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  const container_sty = {
    height: "calc(var(--vh, 1vh) * 70)",
    fontFamily: 'Noto Sans KR'
  }
  return (
    <div className="App" style={container_sty}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/1" element={<Upload/>}></Route>
          <Route path="/2" element={<>2</>}></Route>
          <Route path="/3" element={<Res/>}></Route>
          <Route path="/4" element={<>4</>}></Route>
          <Route path="*" element={<>헿</>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
