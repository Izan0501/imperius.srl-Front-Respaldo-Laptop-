import React from 'react';
import Meta from '../components/Meta';
import ResetPasswordHeader from '../components/StoreHeader';

const ResetPassword = () => {
    return (
        <>
            <Meta title={'Reset Password'} />
            <ResetPasswordHeader title='Reset Password' />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form
                                    action=""
                                    className='d-flex flex-column gap-15'
                                >
                                    <div className='mt-1'>
                                        <input type="password" name='password' placeholder='Password' className="form-control" />
                                    </div>
                                    <div className='mt-1'>
                                        <input type="password" name='confpassword' placeholder='Confirm Password' className="form-control" />
                                    </div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type='submit'>
                                            Ok
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

export default ResetPassword