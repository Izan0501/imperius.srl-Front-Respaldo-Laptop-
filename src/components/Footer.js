import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="" />
                <h2 className='text-white fs-5 m-0'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text" className="form-control py-1" placeholder="Your Email Adress" aria-label="Your Email Adress" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4 fs-4">Contact Us</h4>
              <div className="">
                <address className='text-white fs-6'>
                  Ubi : Mitre 355 Santa Maria,<br /> Catamarca <br />
                  Postal: 4139
                </address>
                <a href="tel: +54 381554679" className='mt-3 d-block mb-1 text-white'>+54 381554679</a>
                <a href="mailto: userX@gmail.com" className='mt-2 d-block mb-0 text-white'>userX@gmail.com</a>
                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                  <a className='text-white' href="">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsGithub className='fs-4'/> 
                  </a>
                  <a className='text-white' href="">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsYoutube className='fs-4'/>
                  </a>
                </div>
                {/* <p className="text-start text-white mb-0 mt-4">&copy; {new Date().getFullYear()}; Imperius.srl</p> */}
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 fs-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refound Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4 fs-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4 fs-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className='text-white py-2 mb-1'>Snacks</Link>
                <Link className='text-white py-2 mb-1'>Drinks</Link>
                <Link className='text-white py-2 mb-1'>Clean Articles</Link>
                <Link className='text-white py-2 mb-1'>Others</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center text-white mb-0 m-0">&copy; {new Date().getFullYear()}; Powered by @Izan_501</p>
          </div>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
