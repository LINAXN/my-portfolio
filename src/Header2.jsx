// import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // مهم لتشغيل Navbar Toggle
import Banner from './assets/banner-bg.png'
// import Logome from './assets/logolinaa.png' 
import Bgheader from './assets/dbe2ef.png'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from './assets/logo.png';
// import playIcon from './images/play-icon.png';

function Header() {
  const socialIcons = (
    <div className="social_icon">
      <ul>
        <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  );

 

  return (
    <>
      <div className="header_section bg-light ">
        <div className="container">
          <nav className="navbar navbar-expand-lg glass-navbar  ">
            <div className="logo">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact me</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="banner_section">
          <section className="slide-wrapper">
            <div className="container-fluid">
             <div
  className="banner_section"
  style={{
    backgroundImage: `url(${Bgheader})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
        
              <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  {[0, 1, 2, 3].map((index) => (
                    <li
                      key={index}
                      data-bs-target="#myCarousel"
                      data-bs-slide-to={index}
                      className={index === 0 ? 'active' : ''}
                    ></li>
                  ))}
                </ol>

                <div className="carousel-inner">
                  {[0, 1, 2, 3].map((index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="banner_taital_main">
                              <h3 className="banner_text">Hello Am <br />Joy Seno</h3>
                              <h1 className="banner_taital">UI/UX Designer</h1>
                            </div>
                          </div>
                          <div className="col-md-6">
                            {socialIcons}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
                </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default Header;
