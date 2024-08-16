import React from 'react'
import Meta from '../components/Meta'
import ProductHeader from '../components/StoreHeader'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import ReactStars from "react-rating-stars-component";
import { AiOutlineHeart } from 'react-icons/ai';
import { TbGitCompare } from 'react-icons/tb';

const SpecificProduct = () => {
    const props = { width: 400, heigth: 500, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" };

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <>
            <Meta title={'Product Name'} />
            <ProductHeader title='Product Name' />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className="img-fluid" alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className="img-fluid" alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className="img-fluid" alt="" /></div>
                                <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg" className="img-fluid" alt="" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>Smart Watch Series 7</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">
                                        $100
                                    </p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={4}
                                            edit={false}
                                        />
                                    </div>
                                </div>
                                <div className="py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Type: </h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Brand: </h3>
                                        <p className='product-data'>Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className='product-heading'>Category: </h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2 mb-3">
                                        <h3 className='product-heading'>Tags: </h3>
                                        <p className='product-data'>Watch</p>
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
                                            <button className="button border-0" type='submit'>
                                                Add To Cart
                                            </button>
                                            <button className='button signup'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=""><AiOutlineHeart className='fs-5 me-2' />Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""><TbGitCompare className='fs-5 me-2' />Add to Wishlist</a>
                                        </div>
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
                                        <a href="javascript:void(0);" onClick={()=> {
                                            copyToClipboard(" https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg")
                                        }}>
                                            Product Link
                                        </a>
                                        {/* <p className='product-data'>Free Order
                                            Without web taxes!! <br /> {" "}
                                            Daily Surprise Offers{" "}
                                            <b>Save upto 25% </b></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    kljgropi´kngiortuhg lhjkfgoi iludfg oLIkjbf iequwyfgv oq i ñjklsdfhipuehfpeiuw hfle iwhfewiuhfqweoi fqwewqeofgqeofygqeoa,dñladkyf gqweoyfgqweoyfgqwoyfgqkh fvqoeyfvbqw elj oieu fg kñjhdfiopua fhpiduoh fjpiads hfpoaiu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Similar Products
                            </h3>
                        </div>
                        <div className="row">
                            <ProductCard />
                            {/* <ProductCard />
                            <ProductCard />
                            <ProductCard /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecificProduct