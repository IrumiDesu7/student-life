import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login-signup.css';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }

  return (
    <div className='login-container'>
      <img
        className='login-image'
        src='images/login-image.jpg'
        alt='students'
      />
      <div className='right-side'>
        <h3 className='login-title'>Student Life</h3>
        <p className='login-description'>
          Welcome, students! Enter your credentials to access this website
        </p>
        <form onSubmit={handleSubmit} className='form-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            required={true}
            onChange={handleChange}
            value={loginData.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            required
            placeholder='Enter your password'
            onChange={handleChange}
            value={loginData.password}
          />
          <button className='login-btn'>Login</button>
        </form>
        <p>
          If you're new, create your account <Link to='/signup'>here</Link>!
        </p>
      </div>
    </div>
  );
}

export default Login;
