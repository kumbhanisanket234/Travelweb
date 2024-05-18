import React from 'react'
import './Blogs.css'
import img25 from '../Images/img25.png'
import img26 from '../Images/img26.png'
import img27 from '../Images/img27.png'
import img28 from '../Images/img28.png'


function Blogs() {
  return (
    <div className='Blogs'>
      <div className="Blog-contailall">
        <div className="Blogs-heading">
          <h1>Get update with <span style={{ color: '#FA7436' }}>latest blog</span></h1>
        </div>

        <div className="Blogs-cards">
          <div className="Blogs-card1">
            <img src={img25} alt="" />
            <p className='Blogs-desc'>The Amazing Difference a Year of Travelling.</p>
            <p className='Blogs-date'>July 27, 2021</p>
          </div>
          <div className="Blogs-card1">
            <img src={img26} alt="" />
            <p className='Blogs-desc'>Travel far enough, you meet yourself.</p>
            <p className='Blogs-date'>July 27, 2021</p>
          </div>
          <div className="Blogs-card1">
            <img src={img27} alt="" />
            <p className='Blogs-desc'>How to Save Money While Visiting Africa.</p>
            <p className='Blogs-date'>July 27, 2021</p>
          </div>
          <div className="Blogs-card1">
            <img src={img28} alt="" />
            <p className='Blogs-desc'>Reflections on 5 Months of Travel: Time to Hang</p>
            <p className='Blogs-date'>July 27, 2021</p>
          </div>
        </div>

        <div className="Blogs-ellipsecontainer">
          <div className="Blogs-ellipse1"></div>
          <div className="Blogs-ellipse2"></div>
          <div className="Blogs-ellipse1"></div>
        </div>

      </div>
    </div>
  )
}

export default Blogs
