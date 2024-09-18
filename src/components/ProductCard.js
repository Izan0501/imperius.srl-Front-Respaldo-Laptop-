import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"

const ProductCard = (props) => {

    const { title, description, price, image, _id, quantity } = props.item;

    const { grid } = props
    const location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to={`${location.pathname === '/' ? `/product/${_id}` : location.pathname === `/product/${_id}` ? `product/${_id}` : `${_id}`}`} className="product-card position-relative">
                    <div className="product-image">
                        <img src={'http://localhost:3977/' + image} className='img-fluid' alt={image} />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">NEW</h6>
                        <h5 className="product tittle">
                            {title}
                        </h5>
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            {description}
                        </p>
                        <Link className="price">${price}</Link>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-6">
                            <Link>
                                <img src={wish} alt="wishlist" />
                            </Link>
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