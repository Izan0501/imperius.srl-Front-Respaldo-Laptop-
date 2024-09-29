import React from 'react';
import Meta from '../components/Meta';
import CartHeader from '../components/StoreHeader';
import { BiArrowBack } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = ({ cartProducts, deleteProduct, addFunction, decreaseFunction, }) => {

    const total = cartProducts.reduce((acc, current) => {
        return acc + current.amount * current.price;
    }, 0);

    if (cartProducts.length === 0) {
        return (
            <>
                <div className="empty-content d-flex align-items-center justify-content-center">
                    <h3 className="contact-title mb-4 gap-15">Your Cart Is Empty...</h3>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Meta title={'Cart'} />
                <CartHeader title='Cart' />
                {
                    cartProducts.map((products) => {
                        return (
                            <>
                                <Container class1="cart-wrapper home-wrapper-2 py-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                                <h4 className='cart-col-1'>Product</h4>
                                                <h4 className='cart-col-2'>Price</h4>
                                                <h4 className='cart-col-3'>Quantity</h4>
                                                <h4 className='cart-col-4'>Total</h4>
                                            </div>
                                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                                    <div className="w-25">
                                                        <img src={"http://localhost:3977/" + products.image} className='img-fluid rounded-2' alt="watch" />
                                                    </div>
                                                    <div className="w-100">
                                                        <p>{products.title}</p>
                                                    </div>
                                                </div>
                                                <div className="cart-col-2">
                                                    <h5 className="price">${products.price}</h5>
                                                </div>
                                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                                    <div>
                                                        <button
                                                            className="decreaseBtn"
                                                            onClick={() => decreaseFunction(products)}
                                                        >-</button>
                                                    </div>
                                                    <div>
                                                        <p className='mt-3'>{products.amount}</p>
                                                    </div>
                                                    <div>
                                                        <button
                                                            className="addBtn"
                                                            onClick={() => addFunction(products)}
                                                        >+</button>
                                                    </div>
                                                    <div>
                                                        <AiFillDelete
                                                            className='delete-icon text-danger'
                                                            onClick={() => deleteProduct(products._id)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="cart-col-4">
                                                    <h5 className="price">${products.price * products.amount}</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Container>
                            </>
                        )
                    })
                }
                <div className=" row align-items-center justify-content-center ">
                    <div className="cart-subtotal col-6 py-3 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to='/product' className='button'><BiArrowBack />&nbsp;&nbsp;Go back to store</Link>
                            <div className='d-flex align-items-end flex-column'>
                                <h4>SubTotal: ${total} </h4>
                                <p>Taxes and shiping caculated at checkout</p>
                                <Link
                                    to='/checkout'
                                    className='button'>Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Cart