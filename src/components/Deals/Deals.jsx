import React from 'react'
import './Deals.css'
import img11 from '../Images/img11.png'
import img12 from '../Images/img12.png'
import img13 from '../Images/img13.png'
import img14 from '../Images/img14.png'
import img15 from '../Images/img15.png'
import img16 from '../Images/img16.png'
import img17 from '../Images/img17.png'
import img18 from '../Images/img18.png'







function Deals() {

  return (
    <div className='Deals'>
      <div className="Deal-content">

        <div className="Deal-headcontain">
          <div className="Deal-textdiv">
            <div className="Deal-heading">
              <h1>Exclusive <span style={{ color: '#FA7436' }}>deals & discounts</span> </h1>
            </div>
            <div className="Deal-detail d-flex justify-content-center">
              <p>Discover our fantastic early booking discounts & start planning your journey.</p>
            </div>
          </div>
        </div>

        <div className="Deal-boxes">
          <div className="Deal-box">
            <img src={img11} alt="" />
            <div className="Deal-carddetail">
              <div className='Deal-City'>
                <p className='Deal-topics'>Madrid</p>
                <div className='d-flex'>
                  <img src={img15} alt="" />
                  <p>4.8</p>
                </div>
              </div>
              <div className="detail-container">
                <div className='Deal-details d-flex'>
                  <img src={img16} alt="" />
                  <p>Spain</p>
                </div>
                <div className="price d-flex gap-2">
                  <p style={{textDecoration:'line-through'}}>$950</p>
                  <p style={{color:'#FA7436',backgroundColor:'#FFE7DB',borderRadius:'7px',padding:'0px 10px',fontWeight:'700'}}>$850</p>
                </div>
              </div>
            </div>

          </div>
          <div className="Deal-box">
            <img src={img12} alt="" />
            <div className="Deal-carddetail">
              <div className='Deal-City'>
                <p className='Deal-topics'>Firenze</p>
                <div className='d-flex'>
                  <img src={img15} alt="" />
                  <p>4.5</p>
                </div>
              </div>
              <div className="detail-container">
                <div className='Deal-details d-flex'>
                  <img src={img16} alt="" />
                  <p>Italy</p>
                </div>
                <div className="price d-flex gap-2">
                  <p style={{textDecoration:'line-through'}}>$850</p>
                  <p style={{color:'#FA7436',backgroundColor:'#FFE7DB',borderRadius:'7px',padding:'0px 10px',fontWeight:'700'}}>$750</p>
                </div>
              </div>

            </div>
          </div>
          <div className="Deal-box">
            <img src={img13} alt="" />
            <div className="Deal-carddetail">

              <div className='Deal-City'>
                <p className='Deal-topics'>Paris</p>
                <div className='d-flex'>
                  <img src={img15} alt="" />
                  <p>4.4</p>
                </div>
              </div>

              <div className="detail-container">
                <div className='Deal-details d-flex'>
                  <img src={img16} alt="" />
                  <p>France</p>
                </div>
                <div className="price d-flex gap-2">
                  <p style={{textDecoration:'line-through'}}>$699</p>
                  <p style={{color:'#FA7436',backgroundColor:'#FFE7DB',borderRadius:'7px',padding:'0px 10px',fontWeight:'700'}}>$599</p>
                </div>
              </div>
            </div>
          </div>

          <div className="Deal-box">
            <img src={img14} alt="" />
            <div className="Deal-carddetail">

              <div className='Deal-City'>
                <p className='Deal-topics'>London</p>
                <div className='d-flex'>
                  <img src={img15} alt="" />
                  <p>4.8</p>
                </div>
              </div>
              <div className="detail-container">
                <div className='Deal-details d-flex'>
                  <img src={img16} alt="" />
                  <p>UK</p>
                </div>
                <div className="price d-flex gap-2">
                  <p style={{textDecoration:'line-through'}}>$950</p>
                  <p style={{color:'#FA7436',backgroundColor:'#FFE7DB',borderRadius:'7px',padding:'0px 10px',fontWeight:'700'}}>$900</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="prenext-btn justify-content-center d-flex">
          <button className="btn-previous btn btn-default"><img src={img18} alt="" /></button>
          <button className="btn-next btn btn-default"><img src={img17} alt="" /></button>
        </div>
      </div>


    </div>
  )
}

export default Deals
