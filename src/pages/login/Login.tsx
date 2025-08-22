import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login: React.FC = () => {
    // Handle form submission
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const email = formData.get('email');
    //     const password = formData.get('password');
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };

    // // Handle form validation
    // const validateForm = (email: string | null, password: string | null) => {
    //     if (!email || !password) {
    //         console.error('Email and password are required');
    //         return false;
    //     }
    //     // Add more validation logic as needed
    //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //         console.error('Invalid email format');
    //         return false;
    //     }
    //     // If all validations pass
    //     console.log('Form is valid');
    //     return true;
    // };

  return (
    <>
      <div className='login-container'>
        <h2>Login</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
          </div>
          
          <div className='form-checks'>
            <div className='remember-me'>
              <input type='checkbox' id='remember-me' name='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <div className='forgot-password'>
              <Link to='/forgot-password'>Forgot password?</Link>
            </div>
          </div>

          <button type='submit'>Login</button>
        </form>
      </div>

      <div className='login-footer'>
        <p>Don't have an account? <Link to='/signup'>Sign up here!</Link></p>
      </div>
    </>
  )
}

export default Login
