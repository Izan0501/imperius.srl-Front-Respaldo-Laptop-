import React from 'react'
import { Link } from 'react-router-dom'

const WishCard = ({ item, deleteFavProduct }) => {
    const { title, price, image, } = item

    return (
        <div className="col-3 bg-white rounded-2 p-3 m-2">
            <div className="wishlist-card w-100 position-relative">
                <button
                    onClick={() => deleteFavProduct(item._id)}
                    style={{
                        "backgroundColor": "transparent",
                        "border": "none",
                    }}
                >
                    <img
                        src="images/cross.svg"
                        alt="cross"
                        className='position-absolute cross img-fluid'
                    />
                </button>
                <Link 
                    to={`/product/${item._id}`}
                >
                    <div className="wishlist-card-image">
                        <img
                            src={'http://localhost:3977/' + image}
                            alt="watch"
                            className='img-fluid w-100'
                        />
                    </div>
                    <div className="py-3">
                        <h5 className='title'>{title}</h5>
                        <h6 className='price'>{price}</h6>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WishCard