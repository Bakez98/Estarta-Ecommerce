import {
  BrowserRouter ,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import React, { lazy, Suspense, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { useDispatch, useSelector } from "react-redux";

//Pages 
const Home = lazy(() => import('./pages/Home/index'));
const Cart = lazy(() => import('./pages/Cart/index'));
const Login = lazy(() => import('./pages/Login/Login'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Products = lazy(() => import('./pages/Products/Products'));


//protected Route 
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoute";
import { validateToken } from "./Redux/auth/actions";
import Spinner from "./components/Spinner";


function App() {
  const {isAuth, loading} = useSelector(state => state.authReducer)
  const nav = useNavigate();
  const dispatch= useDispatch()
  
  useEffect(() => {
    if (isAuth)
      dispatch(validateToken()).then((responce) => {
        if (!responce) nav("/login");
      });
  }, [isAuth]);
  
  if (loading) return <Spinner />;
  return (
    <div className="App">
  
    <NavBar/>
    <Suspense fallback={<div>Loading............</div>}>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route index  element={<Home />} />
      <Route path="/Cart" element={<ProtectedRoutes element={<Cart/>} />} />
      <Route path="/Products" element={<ProtectedRoutes element={<Products/>} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Suspense>
  
    </div>
  )
}

export default App
