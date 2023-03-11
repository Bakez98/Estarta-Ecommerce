import React from 'react'
import { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import login from '../../Redux/auth/actions';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {

const {loading , isAuth} = useSelector(state => state.authReducer);
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


const [email, setEmail] = useState()

  return (
    <div className={styles.wrapper}>
      <input onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Enter your email'></input>
      <button disabled={loading} onClick={HandleLogin}>{loading ? "Loading" : "Login"}</button>

    </div>
  )
}

export default Login