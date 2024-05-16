import React from 'react'
import './Hero.css'
// import homeimage from './Images/tourist-with-thumb-up__1_-removebg 1.png'
import homeimage from '../Images/img1.png'
import vector from '../Images/img2.png'
import img3 from '../Images/img3.png'



function Hero() {

    const back = {
        backgroundImage: `url(${homeimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const back2 = {
        backgroundImage: `url(${vector})`,
    };

    return (
        <div className='Hero'>
            <div className="navbar-main">
                <nav className='navbar'>
                    <button className="btn btn-default logo">Trabook</button>
                    <div className="list">
                        <ul className='navitems'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Destination</a></li>
                            <li><a href="#">Tour</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <button className="btn btn-default login">Login</button>
                    <button className="btn btn-default signup">SignUp</button>
                </nav>
            </div>
            <div className="containerhome">
                <div className="col-md-6 home">
                    <div className="text">
                        <h2>Get started your exciting <span style={{ color: '#FA7436' }}>journey</span> with us.</h2>
                    </div>
                    <div className="paragraph">
                        <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
                    </div>
                    <div className="btndiscover">
                        <button className="btn btn-primary">Discover Now</button>
                    </div>
                </div>

                <div className="main-img col-md-6">
                    <div className="vectorimg" style={back2}>
                    </div>
                    <div className="ellips">
                        <div className="imghome" style={back}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar-main">
                <div className="inr">
                    <div className="content">
                        <div className="location">
                            <div className="afterpic">
                                <p className='topicname'>Location</p>
                                <img src={img3} alt="icon" />
                            </div>
                            <p className='que'>Where are you going</p>    
                        </div>

                        <div className="Date">
                            <div className="afterpic">
                                <p className='topicname'>Date</p>
                                <img src={img3} alt="icon" />
                            </div>
                            <p className='que'>When you will go</p>    
                        </div>
                        <div className="Guest">
                            <div className="afterpic">
                                <p className='topicname'>Guest</p>
                                <img src={img3} alt="icon" />
                            </div>
                            <p className='que'>Number of guest</p>
                        </div>
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
/* tourist-with-thumb-up__1_-removebg 1 */


