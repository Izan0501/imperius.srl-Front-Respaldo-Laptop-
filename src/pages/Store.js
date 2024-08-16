import React, { useState } from 'react'
import StoreHeader from '../components/StoreHeader'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const Store = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Imperius.Srl"} />
      <StoreHeader title='Our Store' />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* Category Filter */}
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Shop By Categories
                </h3>
                <div className="">
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Filter By
                </h3>
                <h5 className="sub-title">
                  Availablity
                </h5>
                <div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                    <label className="form-check-label" htmlFor=""> In Stock (1) </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor=""> Out of Stock (0) </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="From"
                      id="floatingInput"
                    ></input>
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      placeholder="To"
                      id="floatingInput1"></input>
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Product Tags
                </h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablet
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">
                  Random Product
                </h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className='img-fluid'
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>Watch Series 7 Ultra Fast Response</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/headphone.jpg"
                        className='img-fluid'
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>Headphones Ultimate I6+</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        value={4}
                        edit={false}
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Store products list section */}
            <div className="col-9">
              {/* Filter Sort */}
              <div className="filter-sort-grid mb-3 ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ "width": "100px" }}>Sort By:</p>
                    <select name="" className='form-control form-select' id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected='selected'>Best Selling</option>
                      <option value="title ascending">Alphabetically, A-Z</option>
                      <option value="title descending">Alphabetically, Z-A</option>
                      <option value="price-ascending"> Price, low to high</option>
                      <option value="price-descending"> Price, high to low</option>
                      <option value="created-ascending">Date, new to old</option>
                      <option value="created-descending">Date, old to new</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10 grid'>
                    <p className="total-products mb-0">21 products</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img onClick={() => {
                        setGrid(3)
                      }} src="images/gr4.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => {
                        setGrid(4)
                      }} src="images/gr3.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => {
                        setGrid(6)
                      }} src="images/gr2.svg" alt="grid" className="d-block img-fluid" />
                      <img onClick={() => {
                        setGrid(12)
                      }} src="images/gr.svg" alt="grid" className="d-block img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Store Products List */}
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store