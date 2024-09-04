import React, { useContext } from 'react';
import Meta from '../components/Meta';
import LoginHeader from '../components/StoreHeader';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { useState } from 'react';
import { loginUser } from '../api/loginUser';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  /* 
  form validation & routes navigation
   */
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* 
  Getting login form data
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    // data

    try {
      const { access } = await loginUser(formData);
      login(access);
      
      console.log(access);
      localStorage.setItem('access', access);

      navigate('/');

      setError('');
    } catch (error) {
      setError(error.msg);
    }
  };

  return (
    <>
      <Meta title={'Login'} />
      <LoginHeader title='Login' />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form
                onSubmit={handleSubmit}
                action=""
                className='d-flex flex-column gap-15'
              >
                <CustomInput
                  type="email"
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <CustomInput
                  type="password"
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <Link className='mt-2' to='/forgot-password'>Forgot Password?</Link>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type='submit'>
                    Login
                  </button>
                  <Link to='/signup' className='button signup'>SignUp</Link>
                </div>
              </form>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            {error && <p className='alert alert-danger w-20'>{error}</p>}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login