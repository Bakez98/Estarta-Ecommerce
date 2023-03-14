import React from 'react'
import { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import { login } from '../../Redux/auth/actions';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

import Spinner from 'react-bootstrap/Spinner';
import { BsArrowRightShort } from 'react-icons/bs';


const Login = () => {

const {loading , isAuth} = useSelector(state => state.authReducer);


const [email, setEmail] = useState()
const dispatch = useDispatch();
const navigate = useNavigate();


function HandleLogin() {
dispatch(login(email))
}

useEffect(() => {
  if(isAuth)
  {
    navigate("/Products")
  }


}, [isAuth])



  return (
    <div className={styles.wrapper}>
      <h2>Please Enter Your Email</h2>
      <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Enter your email'></input>
      <button className={styles.loginBtn} disabled={loading} onClick={HandleLogin}>{loading ?"Loading" : "Login"}<BsArrowRightShort size={30} /></button>

    </div>
  )
}

export default Login