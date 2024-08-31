import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import watch from '../images/watch.jpg';

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Imperius.Srl</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className='text-dark total-price' to='/cart'>Cart</Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">
                    Information
                  </li>
                  &nbsp; /<li className="breadcrumb-item active total-price">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active total-price" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">
                Contact information
              </h4>
              <p className="user-details total">
                Random User (randomuser123@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                className='d-flex flex-wrap gap-15 justify-content-between'
                action=""
              >
                <div className='w-100'>
                  <select defaultValue={'DEFAULT'} className="form-control form-select" name='' id="">
                    <option value="DEFAULT" selected disabled>Select Ubication</option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input type='text' placeholder='First Name' className="form-control" />
                </div>
                <div className='flex-grow-1'>
                  <input type='text' placeholder='Last Name' className="form-control" />
                </div>
                <div className='w-100'>
                  <input type='text' placeholder='Address' className="form-control" />
                </div>
                <div className='w-100'>
                  <input type='text' placeholder='Apartment, Floor, etc' className="form-control" />
                </div>
                <div className='flex-grow-1'>
                  <input type='text' placeholder='City' className="form-control" />
                </div>
                <div className='flex-grow-1'>
                  <select defaultValue={'DEFAULT'} className="form-control form-select" name='' id="">
                    <option value="DEFAULT" selected disabled>Select State</option>
                  </select>
                </div>
                <div className='flex-grow-1'>
                  <input type='text' placeholder='Zipcode' className="form-control" />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to='/cart' className='text-dark'><BiArrowBack />&nbsp; &nbsp;Return to Cart</Link>
                    <Link to='/cart' className='button'>Continue to Shipping</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className='border-bottom py-4'>
              <div className="d-flex gap-10 align-items-center">
                <div className='w-75 d-flex gap-10'>
                  <div className='w-25 position-relative' >
                    <span
                      style={{ top: "-10px", right: "-5px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
                      1
                    </span>
                    <img className='img-fluid' src={watch} alt="" />
                  </div>
                  <div className=''>
                    <h5 className="title total-price">
                      Smart Watch Series 7
                    </h5>
                    <p className='total-price'>Free Shipping</p>
                  </div>
                </div>
                <div className='flex-grow-1'>
                  <h5 className='total'>$200</h5>
                </div>
              </div>
            </div>
            <div className='border-bottom py-4'>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='total'>Subtotal</p>
                <p className='total-price'>$ 200</p>
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='mb-0 total'>Shipping</p>
                <p className='mb-0 total-price'>Free</p>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
              <h4 className='total'>Total</h4>
              <h5 className='total-price'>$ 200</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout