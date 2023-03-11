import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
    <h1>Welcome to my website!</h1>
    <p>Please login to access the site.</p>
    <Link to="/login">
      <button>Login</button>
    </Link>
  </div>
  )
}

export default Home