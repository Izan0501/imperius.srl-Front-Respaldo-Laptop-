import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (

    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" alt="blog-Img" className='img-fluid w-100' />
      </div>
      <div className="blog-content">
        <p className='date'>6 Aug, 2024</p>
        <h5 className='title'>A beautiful sunday morning renaissance</h5>
        <p className='desc'>
          El azar es una casualidad, presente, teóricamente, en diversos fenómenos
        </p>
        <Link to="/specific-blog" className='button'>Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
