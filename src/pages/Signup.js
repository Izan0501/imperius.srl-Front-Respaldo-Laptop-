import React, { useState } from 'react';
import Meta from '../components/Meta';
import SignupHeader from '../components/StoreHeader';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { registerUser } from '../api/registerUser';

const Signup = () => {

  //static data
  const [formData, setFormData] = useState({
    firstname: String,
    lastname: String,
    email: '',
    password: ''
  });

  // form validation
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  //getting form register data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData);
      setError('');
      setSuccess(res.msg)
    } catch (error) {
      setError(error.msg);
      setSuccess(false)
    }
  }

  return (
    <>
      <Meta title={'Signup'} />
      <SignupHeader title='Signup' />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Create Account</h3>
              <form
                onSubmit={handleSubmit}
                className='d-flex flex-column gap-15'
              >
                <CustomInput
                  type="text"
                  name='firstname'
                  placeholder='First Name'
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
                <CustomInput
                  type="text"
                  name='lastname'
                  placeholder='Last Name'
                  value={formData.phone}
                  onChange={handleInputChange}
                />
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
                <Link className='mt-2 text-dark' to='/login'><BiArrowBack />&nbsp;Back to Login</Link>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            {error && <p className='alert alert-danger w-20'>{error}</p>}
            {success && <p className='alert alert-success'>{success}</p>}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup