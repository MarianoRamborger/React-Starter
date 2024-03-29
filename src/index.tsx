import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Main, RouterTest} from './Containers/index'
import { CtxProvider } from './Context/context';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CtxProvider>
          <Routes>
              <Route path='/' element={<Main/>} /> 
              <Route path="/routing" element={<RouterTest/>} />
          </Routes>
        </CtxProvider>
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
