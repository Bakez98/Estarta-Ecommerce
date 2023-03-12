import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';

//Pages 
const Home = lazy(() => import('./pages/Home/index'));
const Cart = lazy(() => import('./pages/Cart/index'));
const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Products = lazy(() => import('./pages/Products/Products'));


function App() {


  return (
    <div className="App">
  <BrowserRouter>
    <NavBar/>
    <Suspense fallback={<div>Loading............</div>}>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route index  element={<Home />} />
      <Route path='/Cart'  element={<Cart/>} />
      <Route path="/Products" element={<Products />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Suspense>
  </BrowserRouter>
    </div>
  )
}

export default App
