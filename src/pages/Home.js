import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <>
            {/* home wrapper*/}
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PRO5.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br /> or $41.62/mo</p>
                                    <Link className='button'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10  justify-content-between align-items-center">
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>Best Sale</h4>
                                        <h5>LAPTOPS MAX</h5>
                                        <p>From $1699.00 <br /> or $64.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>Shop the latest band</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>BUY iPad Air</h5>
                                        <p>From $599 <br /> or $54.62/mo</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>FOR YOU</h4>
                                        <h5>HEADPHONES</h5>
                                        <p>From $499 <br /> or $34.62/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* home wrapper 2 */}
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-10 flex-column'>
                                    <img src="images/service.png" alt="services" />
                                    <h6>Free Order</h6>
                                    <p className='mb-0 '>Without web taxes</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 flex-column'>
                                    <img src="images/service-02.png" alt="services" />
                                    <h6>Daily Surprise Offers</h6>
                                    <p className='mb-0 '>Save upto 25% off</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 flex-column'>
                                    <img src="images/service-03.png" alt="services" />
                                    <h6>Support 24/7</h6>
                                    <p className='mb-0 '>Shop with an expert</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 flex-column'>
                                    <img src="images/service-04.png" alt="services" />
                                    <h6>Affordable Prices</h6>
                                    <p className='mb-0 '>Get Factory Default Price </p>
                                </div>
                                <div className='d-flex align-items-center gap-10 flex-column'>
                                    <img src="images/service-05.png" alt="services" />
                                    <h6>
                                        Secure Payment
                                    </h6>
                                    <p className='mb-0 '>100% Protected Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="" />
                                </div>
                                <div className="d-flex gap align-items-center">
                                    <div className="">
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Products section */}
            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured Collection
                            </h3>
                        </div>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular products Section */}
            <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/famous-1.jpg" className='img-fluid' alt="famouse" />
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 7</h6>
                                    <p>From $399 or $16.62/mo for 24 mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/famous-2.jpg" className='img-fluid' alt="famouse" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>Studio Display</h5>
                                    <h6 className='text-dark'>600 nits of brightness</h6>
                                    <p className='text-dark'>27-inch 5k Retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/tab.jpg" className='img-fluid' alt="famouse" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>Studio Display</h5>
                                    <h6 className='text-dark'>Samsung TAb S9+</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img src="images/famous-4.jpg" className='img-fluid' alt="famouse" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>home sepeakers</h5>
                                    <h6 className='text-dark'>Room filling sound.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* marquee-wrapper */}
            <section className="marquee-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className='d-flex '>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-01.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-02.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-03.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-04.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-05.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-06.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-07.png" alt="sponsors" />
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img src="images/brand-08.png" alt="sponsors" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog--wrapper */}
            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Our Latest News
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                        <div className="col-3">
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
