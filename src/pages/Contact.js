import React from 'react';
import Meta from '../components/Meta';
import ContactHeader from '../components/StoreHeader';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';

const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <ContactHeader title='Contact Us' />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.8638634982015!2d-66.04948075816172!3d-26.696949038087734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9421e52d634a02cf%3A0xe1d0e1a47fbdaf76!2sSanta%20Mar%C3%ADa%2C%20Catamarca!5e0!3m2!1ses!2sar!4v1723324969871!5m2!1ses!2sar"
                className='border-0 w-100'
                height="450"
                style={{ "border": "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div className="">
                  <h3 className="contact-title mb-4 gap-15">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div className="">
                      <input
                        type="text"
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div className="">
                      <input
                        type="email"
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div className="">
                      <input
                        type="tel"
                        className='form-control'
                        placeholder='Mobile Number'
                      />
                    </div>
                    <div className="">
                      <textarea
                        name=''
                        id=''
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder='Comments'
                      ></textarea>
                    </div>
                    <div className="">
                      <button className='button border-0'>Send</button>
                    </div>
                  </form>
                </div>
                <div className="">
                  <h3 className="contact-title mb-4">Get in touch with us </h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          Fray Mamerto Esquiu 100, K4139 Santa María, Catamarca
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel:+54 381683547">+54 381683547</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:imperius.srl@gmail.com">imperius.srl@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday-Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
