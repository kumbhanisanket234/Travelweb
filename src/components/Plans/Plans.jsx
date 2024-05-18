import React from 'react'
import './Plans.css'
import img11 from '../Images/img11.png'
import img12 from '../Images/img12.png'
import img13 from '../Images/img13.png'
import img14 from '../Images/img14.png'
import img15 from '../Images/img15.png'
import img16 from '../Images/img16.png'
import img17 from '../Images/img17.png'
import img18 from '../Images/img18.png'
import img19 from '../Images/img19.png'
import img20 from '../Images/img20.jpg'
import img21 from '../Images/img21.png'
import img22 from '../Images/img22.png'
import img23 from '../Images/img23.png'




function Plans() {

  return (
    <div className='Plans'>
      <div className="Plans-content">

        <div className="Plans-headcontain">
          <div className="Plans-textdiv">
            <div className="Plans-heading">
              <h1>Best <span style={{ color: '#FA7436' }}>vacation plan</span> </h1>
            </div>
            <div className="Plans-detail d-flex justify-content-center">
              <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
            </div>
          </div>
          <div className="imgdiv">
            <img src={img19} alt="img" />
          </div>
        </div>


        <div className="Plans-boxes">
          <div className="Plans-box">
            <img src={img20} style={{ height: '327px', width: '369px', borderRadius: '16px' }} alt="" />
            <div className="Plans-carddetail">
              <div className='Plans-City'>
                <p className='Plans-topics'>Rom,Italy</p>
                <div className='d-flex Plans-amt'>
                  <p>$5.42k</p>
                </div>
              </div>
              <div className="detail-container">
                <div className='Plans-details d-flex'>
                  <img src={img23} alt="" />
                  <p>10 Days Trip</p>
                </div>
                <div className="Plans-price d-flex" >
                  <img src={img15} alt="" />
                  <p>4.8</p>
                </div>
              </div>
            </div>

          </div>
          <div className="Plans-box">
            <img src={img21} alt="" />
            <div className="Plans-carddetail">
              <div className='Plans-City'>
                <p className='Plans-topics'>London,Uk</p>
                <div className='d-flex Plans-amt'>
                  <p>$2.42k</p>
                </div>
              </div>
              <div className="detail-container">
                <div className='Plans-details d-flex'>
                  <img src={img23} alt="" />
                  <p>10 Days Trip</p>
                </div>
                <div className="Plans-price d-flex">
                  <img src={img15} alt="" />
                  <p>4.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Plans-box">
            <img src={img22} alt="" />
            <div className="Plans-carddetail">

              <div className='Plans-City'>
                <p className='Plans-topics'>Osaka,Japan</p>
                <div className='d-flex Plans-amt'>
                  <p>$4.23k</p>
                </div>
              </div>

              <div className="detail-container">
                <div className='Plans-details d-flex'>
                  <img src={img23} alt="" />
                  <p>10 Days Trip</p>
                </div>
                <div className="Plans-price d-flex">
                  <img src={img15} alt="" />
                  <p>4.4</p>
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

export default Plans
