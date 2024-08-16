import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg"
import watch from "../images/watch.jpg"
import watch2 from "../images/watch1.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = (props) => {
    const { grid } = props
    const location = useLocation();

    return (
        <>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to=':id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={wish} alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="product" />
                        <img src={watch2} className='img-fluid' alt="product" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product tittle">
                            kids headphones bulk 10 pak lulti colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={4}
                            edit={false}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At veri eos er accusamius eu ijusti odio dihfionsj dicusi qui
                            blandintiis oraesentium volptatum vlpado delentini atque qurripri
                            quos dolores ear tcasasd oraesentium volptatum vlpado delentini atq...
                        </p>
                        <Link className="price">$100.00</Link>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src={prodcompare} alt="Compare" />
                            </Link>
                            <Link>
                                <img src={view} alt="View" />
                            </Link>
                            <Link>
                                <img src={addcart} alt="addCart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to=':id' className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link>
                            <img src={wish} alt="wishlist" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="product" />
                        <img src={watch2} className='img-fluid' alt="product" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product tittle">
                            kids headphones bulk 10 pak lulti colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={4}
                            edit={false}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At veri eos er accusamius eu ijusti odio dihfionsj dicusi qui
                            blandintiis oraesentium volptatum vlpado delentini atque qurripri
                            quos dolores ear tcasasd oraesentium volptatum vlpado delentini atq...
                        </p>
                        <Link className="price">$100.00</Link>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src={prodcompare} alt="Compare" />
                            </Link>
                            <Link>
                                <img src={view} alt="View" />
                            </Link>
                            <Link>
                                <img src={addcart} alt="addCart" />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard
