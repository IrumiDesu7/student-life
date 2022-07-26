import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSignupData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { password, passwordConfirm } = signupData;
    if (password === passwordConfirm) {
      console.log(signupData);
    } else {
      console.log("password isn't the same");
    }
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
          Welcome, students! Create new account to access this website
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
            value={signupData.email}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            required
            placeholder='Enter your password'
            onChange={handleChange}
            value={signupData.password}
          />
          <label htmlFor='passwordConfirm'>Confirm Password</label>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            required
            placeholder='Confirm your password'
            onChange={handleChange}
            value={signupData.passwordConfirm}
          />
          <button className='login-btn'>Signup</button>
        </form>
        <p>
          Already have an account? Click <Link to='/login'>here</Link>!
        </p>
      </div>
    </div>
  );
}

export default Signup;
