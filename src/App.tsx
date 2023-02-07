import React from 'react';
import './App.css';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router';
import Layout from 'pages/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="about" element={<div>AAAAAAAAAAAAAAa</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
