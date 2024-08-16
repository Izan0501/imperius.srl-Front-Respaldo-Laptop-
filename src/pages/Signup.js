import React from 'react';
import Meta from '../components/Meta';
import SignupHeader from '../components/StoreHeader';

const Signup = () => {
  return (
    <>
      <Meta title={'Signup'} />
      <SignupHeader title='Signup' />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Create Account</h3>
                <form
                  action=""
                  className='d-flex flex-column gap-15'
                >
                  <div>
                    <input type="text" name='name' placeholder='First Name' className="form-control" />
                  </div>
                  <div>
                    <input type="text" name='last-name' placeholder='Last Name' className="form-control" />
                  </div>
                  <div>
                    <input type="email" name='email' placeholder='Email' className="form-control" />
                  </div>
                  <div className='mt-1'>
                    <input type="password" name='password' placeholder='Password' className="form-control" />
                  </div>
                  {/* <Link className='mt-2' to='/login'>Cancel</Link> */}
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup