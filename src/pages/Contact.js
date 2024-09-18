import React from 'react';
import Meta from '../components/Meta';
import ContactHeader from '../components/StoreHeader';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle, BiBorderRadius } from 'react-icons/bi';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [map, setMap] = React.useState(null);

  const containerStyle = {
    width: "100%",
    height: '500px',
    border: '0',
    BorderRadius: '20px'
  };

  const center = {
    lat: -26.696950,
    lng: -66.049365
  };

  const points = [
    {
      lat: -26.696950,
      lng: -66.049365
    },
    // {
    //   lat: -26.698955,
    //   lng: -66.049365
    // },
    // {
    //   lat: -26.693955,
    //   lng: -66.049365
    // },
    // {
    //   lat: -26.6945955,
    //   lng: -66.049365
    // }
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAnSbvZP1IdOW9fTljd7vdVOCeFKiRzB30"
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  return (
    <>
      <Meta title={'Contact Us'} />
      <ContactHeader title='Contact Us' />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12 bg-white rounded-2 p-4">
            <h3 className="contact-title mb-4 gap-15">Our branches</h3>
            {isLoaded ? <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={{
                streetViewControl: false,
                mapTypeControl: false
              }}
            >
              {
                points.map((point, i) => (
                  <MarkerF position={point}>
                  </MarkerF>
                ))
              }
            </GoogleMap> : <></>}
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4 gap-15">Contact</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type="text"
                      className='form-control'
                      placeholder='Name'
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className='form-control'
                      placeholder='Mobile Number'
                    />
                  </div>
                  <div>
                    <textarea
                      name=''
                      id=''
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder='Comments'
                    ></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us </h3>
                <div>
                  <ul className="ps-0">
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Fray Mamerto Esquiu y Mariano Moreno, K4139 Santa María, Catamarca
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5' />
                      <Link to="/tel:+54 381683547">+54 381683547</Link>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <Link to="/mailto:imperius.srl@gmail.com">imperius.srl@gmail.com</Link>
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
      </Container>
    </>
  )
}

export default Contact