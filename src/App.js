
import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './redux/store';
//import ReactDOM from "react-dom"; 

import Table from './pages/Table';

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Table />}>
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
};


