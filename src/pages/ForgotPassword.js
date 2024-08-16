import React from 'react'
import Meta from '../components/Meta'
import ForgotPasswordHeader from '../components/StoreHeader'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
       <Meta title={'Forgot Password'} />
       <ForgotPasswordHeader title='Forgot Password' />
       <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Recover Your Password</h3>
              <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
              <form
                action=""
                className='d-flex flex-column gap-15'
              >
                <div>
                  <input type="email" name='email' placeholder='Email' className="form-control" />
                </div>
                <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                  <button className="button border-0">
                    Submit
                  </button>
                  <Link className='mt-2' to='/login'>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword