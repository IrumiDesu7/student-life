import { useState } from 'react';
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
      <img className='login-image' src='images/loginImage.png' alt='students' />
      <div className='right-side'>
        <h3>Student Life</h3>
        <p>Welcome, students!</p>
        <form onSubmit={handleSubmit} className='form-container'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
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
            onChange={handleChange}
            value={loginData.password}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
