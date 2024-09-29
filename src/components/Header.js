import React, { useContext } from 'react';
import { NavLink, Link, useSearchParams } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { AuthContext } from '../context/AuthContext';

const Header = ({ cartProducts }) => {
  const { user, logout, products } = useContext(AuthContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setSearchParams({ title: e.target.value })

    if (!searchParams) {
      return (
        <p>
          Please Introduce Something
        </p>
      )
    }
  }

  return (
    <>
      {/* Top Header */}
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h4>
                <Link className='text-white'>
                  Imperius.srl
                </Link>
              </h4>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-describedby="basic-addon2"
                  onChange={handleChange} aria-label="Search Product Here..."
                  value={searchParams.get('title') ? searchParams.get('title') : ''}
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch cursor={'pointer'} onClick={handleChange} className='fs-4' />
                </span>
              </div>
              <ul className={searchParams.get('title') ? 'filterContent mt-0 d-flex' : 'd-none'}>
                {
                  products
                    .filter((item) => {
                      let inputValue = searchParams.get('title');
                      let title = item.title.toLowerCase()

                      if (!inputValue) {
                        return false;
                      } else {
                        return title.startsWith(inputValue.toLowerCase());
                      }

                    })
                    .map((item) => (
                      <li
                        className='filter-li'
                        key={item._id}
                      >
                        <br className='dash' />
                        <Link className='a' to={`/product/${item._id}`}>{item.title}</Link>
                      </li>

                    ))}


              </ul>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-around">
                <div className="">
                  <Link to='/product' className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/store-svgrepo-com.svg" alt="compare" />
                    <p className='mb-0'>
                      Store <br />
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link to='wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/user.svg" alt="cart" />
                    {user ? <>
                      <button
                        style={{
                          "backgroundColor": "transparent",
                          "color": "white",
                          "border": "none"
                        }}
                        onClick={logout}
                      >
                        <p className='mb-0'>
                          Log Out</p>
                      </button>

                    </> : <p className='mb-0'>
                      Log in <br /> My account
                    </p>}
                  </Link>
                </div>
                <div className="">
                  <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cartProducts.length}</span>
                      <p className='mb-0'>$0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div >
      </header >
      {/* End Header */}
      < header className="header-bottom py-3" >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/menu.svg" alt="" /><span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to=""
                      >Action</Link></li>
                      <li><Link className="dropdown-item text-white" to=""
                      >Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to=""
                      >Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links ">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink
                      to='/'>
                      Home
                    </NavLink>
                    <NavLink
                      to='/blog'>
                      Blogs
                    </NavLink>
                    <NavLink
                      to='/contact'>
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}

export default Header