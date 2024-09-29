import React, { useState, useEffect } from 'react'
import Meta from '../components/Meta'
import ProductHeader from '../components/StoreHeader'
import ReactImageZoom from 'react-image-zoom';
import { AiOutlineHeart } from 'react-icons/ai';
import { TbGitCompare } from 'react-icons/tb';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { getProduct } from '../api/getSpecificProduct';


const SpecificProduct = ({ addProductToCart, addProductToList }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct()
            .then((data) => setProduct(data))
            .catch((error) => console.log(`Error: ${error}`));
    }, []);

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }


    const { title, price, description, category, image } = product

    const propsZ = { width: 400, heigth: 500, zoomWidth: 600, img: 'http://localhost:3977/' + image };


    return (
        <>
            <Meta title={title} />
            <ProductHeader title={title} />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...propsZ} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>{title}</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">
                                    ${price}
                                </p>
                                <div className="d-flex align-items-center gap-10">
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Type: </h3>
                                    <p className='product-data'>{category}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Brand: </h3>
                                    <p className='product-data'>Havells</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Category: </h3>
                                    <p className='product-data'>{category}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2 mb-3">
                                    <h3 className='product-heading'>Tags: </h3>
                                    <p className='product-data'>{title}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2 mb-3">
                                    <h3 className='product-heading'>Availablity : </h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex flex-row align-items-center gap-15 mt-2 mb-3">
                                    <h3 className='product-heading'>Quantity : </h3>
                                    <div>
                                        <input
                                            type="number"
                                            name=''
                                            style={{ width: "70px" }}
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <Link
                                            to='/cart'
                                            className="button border-0"
                                            type='submit'
                                            onClick={() => addProductToCart(product)}
                                        >
                                            <Link to='/cart'>Add To Cart</Link>
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <button
                                        onClick={()=> addProductToList(product)}
                                        style={{
                                            "backgroundColor": "transparent",
                                            "border": "none"
                                        }}
                                    >
                                        <Link
                                            to="/wishlist"
                                        >
                                            <AiOutlineHeart
                                                className='fs-5 me-2'
                                            />
                                            Add to Wishlist
                                        </Link>
                                    </button>
                                </div>
                                <div className="d-flex gap-10 my-3">
                                    <h3 className='product-heading'>Shipping & Returns: </h3>
                                    <p className='product-data'>Free Order
                                        Without web taxes!! <br /> {" "}
                                        Daily Surprise Offers{" "}
                                        <b>Save upto 25% </b></p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className='product-heading'>Copy Product Link: </h3>
                                    <Link to="/" onClick={() => {
                                        copyToClipboard(" https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg")
                                    }}>
                                        Product Link
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="featured-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Similar Products
                        </h3>
                    </div>
                    <div className="row">

                        {/* {/* <ProductCard /> */}

                    </div>
                </div>
            </Container>
        </>
    )
}



export default SpecificProduct