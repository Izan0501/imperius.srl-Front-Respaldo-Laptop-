import React from 'react'
import Meta from '../components/Meta'
import BlogHeader from '../components/StoreHeader'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog from "../images/blog-1.jpg"

const SpecificBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog'} />
      <BlogHeader title='Dynamic Blog ' />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link
                  className='d-flex align-items-center gap-10'
                  to='/blog'>
                  <HiOutlineArrowLeft className='fs-4'/> Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog} className='img-fluid w-100 my-4' alt="" />
                <p>
                  kljgropi´kngiortuhg  lhjkfgoi iludfg oLIkjbf iequwyfgv oq i ñjklsdfhipuehfpeiuw hfle iwhfewiuhfqweoi fqwewqeofgqeofygqeoa,dñladkyf gqweoyfgqweoyfgqwoyfgqkh fvqoeyfvbqw elj oieu fg
                  kñjhdfiopua fhpiduoh fjpiads hfpoaiu fhpaiu fhpiof
                  aslkdha osiyud gas8io7 dhapso´dja p0á9sud0asu amsdoais oaisjd opioiajs poijpaouihs p piuhapui goyugoyui guoyg yug yuog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecificBlog;