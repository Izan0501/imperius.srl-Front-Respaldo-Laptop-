import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
// import ProductCard from '../components/ProductCard';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { motion } from 'framer-motion'
import { fadeIn } from '../components/variants'

const Home = () => {
    return (
        <>
            {/* home wrapper*/}
            <Container class1='home-wrapper-1 py-5'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="row"
                >
                    <div className="col-6">
                        <div
                            style={{ "width": "614px", "height": "440px", "backgroundColor": "white", "borderRadius": "10px" }}
                            className="main-banner position-relative p-3 object-fit-fill">
                            <img src="images/arcor2.png" className='img-fluid rounded-3 w-100 h-100 object-fit-cover' alt="main banner" />
                            <div className="main-banner-content position-absolute">
                                <h4>Nuevas Cofler Rellenas</h4>
                                <h5>Probalas con tus amigos</h5>
                                <p>Disponibles ya en tienda y sucursales <br /> imperius.Srl</p>
                                <Link className='button'>Ver</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10  justify-content-between align-items-center">
                            <div className="small-banner position-relative p-3">
                                <img src="images/arcorCandy.png" className='img-fluid rounded-3' alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW</h4>
                                    <h5 className='h51'>CANDY</h5>
                                </div>
                            </div>
                            <div className="small-banner position-relative p-3">
                                <img src="images/arcorOthers.png" className='img-fluid rounded-3' alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% OFF</h4>
                                    <h5>OTROS</h5>
                                </div>
                            </div>
                            <div className="small-banner position-relative p-3">
                                <img src="images/arcorChocolates.png" className='img-fluid rounded-3 ' alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW</h4>
                                    <h5>COFLER</h5>
                                </div>
                            </div>
                            <div className="small-banner position-relative p-3">
                                <img src="images/arcorMer.png" className='img-fluid rounded-3' alt="main banner" />
                                <div className="small-banner-content position-absolute">
                                    <h4>20% OFF</h4>
                                    <h5>MERCADERIA</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
            {/* home wrapper 2 */}
            <Container class1='home-wrapper-2 py-5'>
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="row"
                >
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
                </motion.div>
            </Container>
            {/* Services section */}
            <Container class1='home-wrapper-2 py-5'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="row"
                >
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {
                                services.map((item, index) => {
                                    return (
                                        <div className='d-flex align-items-center gap-15 flex-column' key={index}>
                                            <img src={item.image} alt="services" />
                                            <h6>{item.title}</h6>
                                            <p className='mb-0'>{item.tagline}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </motion.div>
            </Container>
            {/* Products section */}
            {/* <Container class1='featured-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Featured Collection
                        </h3>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </Container> */}
            {/* Popular products Section */}
            <Container class1='famous-wrapper py-5 home-wrapper-2'>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className="row">
                    <h3 className="section-heading">
                        NEW STOCK
                    </h3>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="col-3"
                    >
                        <div className="famous-card position-relative">
                            <img src="images/famous-1.jpg" className='img-fluid' alt="famouse" />
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo for 24 mo.*</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-2.jpg" className='img-fluid' alt="famouse" />
                            <div className="famous-content position-absolute">
                                <h5 className='text-dark'>Studio Display</h5>
                                <h6 className='text-dark'>600 nits of brightness</h6>
                                <p className='text-dark'>27-inch 5k Retina display</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/tab.jpg" className='img-fluid' alt="famouse" />
                            <div className="famous-content position-absolute">
                                <h5 className='text-dark'>Studio Display</h5>
                                <h6 className='text-dark'>Samsung TAb S9+</h6>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}

                        className="col-3">
                        <div className="famous-card position-relative">
                            <img src="images/famous-4.jpg" className='img-fluid' alt="famouse" />
                            <div className="famous-content position-absolute">
                                <h5 className='text-dark'>home sepeakers</h5>
                                <h6 className='text-dark'>Room filling sound.</h6>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
            {/* marquee-wrapper */}
            <Container class1='marquee-wrapper py-5'>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="row">
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
                </motion.div>
            </Container>
            {/* blog--wrapper */}
            <Container class1="blog-wrapper py-5 home-wrapper-2">
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
            </Container>
        </>
    )
}

export default Home