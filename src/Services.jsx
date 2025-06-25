import React from 'react';
import icon1 from './assets/icon-1.png';
import icon2 from './assets/icon-2.png';
import icon3 from './assets/icon-3.png';
import icon4 from './assets/icon-4.png';
import icon6 from './assets/icon-6.png';
import icon7 from './assets/icon-7.png';
import icon8 from './assets/icon-8.png';

function Services() {
  return (
    <div className="services_section layout_padding margin_90">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="services_taital">
              My <span className="portfolio_taital_1">Services</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services_section_2">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box_main">
                <div className="app_icon">
                  <img src={icon1} alt="App Design Icon" />
                </div>
                <div className="app_icon_1">
                  <img src={icon1} alt="App Design Icon Hover" />
                </div>
                <h4 className="services_text active">App Design</h4>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="box_main">
                <div className="app_icon">
                  <img src={icon2} alt="Website Design Icon" />
                </div>
                <div className="app_icon_1">
                  <img src={icon6} alt="Website Design Icon Hover" />
                </div>
                <h4 className="services_text">Website Design</h4>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="box_main">
                <div className="app_icon">
                  <img src={icon3} alt="HTML CSS Icon" />
                </div>
                <div className="app_icon_1">
                  <img src={icon7} alt="HTML CSS Icon Hover" />
                </div>
                <h4 className="services_text">Html And Css</h4>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="box_main">
                <div className="app_icon">
                  <img src={icon4} alt="Logo Design Icon" />
                </div>
                <div className="app_icon_1">
                  <img src={icon8} alt="Logo Design Icon Hover" />
                </div>
                <h4 className="services_text">Logo Designing</h4>
              </div>
            </div>
          </div>
          <div className="readmore_bt">
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
