import React from 'react'
import './Login.css'
import assets from '../../assets/assets'
const Login = () => {
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="logo" />
        <form className='login-form'>
            <h2>Sign Up</h2>
            <input type="text" placeholder='username' className='form-input' required />
            <input type="Email" placeholder='Email address' className='form-input'/>
            <input type="password" placeholder='password' className='form-input'/>
            <button type='submit'>Sign Up</button>
            <div className='lodin-term'>
                <input type="checkbox" />
                <p>Agree to the term of use & private policy</p>
            </div>
            <div className='login-forgot'>
                <p className="login-toggle">Already have an account <span>click here</span></p>
            </div>

        </form>
      
    </div>
  )
}

export default Login
