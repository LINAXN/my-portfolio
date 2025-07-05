import React from 'react';
import icon0 from './assets/icon-0.png';
import icon1 from './assets/icon-1.png';
import icon2 from './assets/icon-2.png';
import icon3 from './assets/icon-3.png';
import icon4 from './assets/icon-4.png';
import icon6 from './assets/icon-6.png';
import icon7 from './assets/icon-7.png';
import icon8 from './assets/icon-8.png';
// import icon9 from './assets/icon-9.svg'
import icon10 from './assets/icon-10.png'
import icon11 from './assets/icon-11.png'
import icon12 from './assets/icon-12.png'
import icon13 from './assets/icon-13.png'

function Services() {
  return (
    <>
  <section id="services" className="section">
    <div className="services_section">
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
                  <img src={icon0} alt="App Design Icon" />
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
        </div>
      </div>
      <div className="container">
        <div className="services_section_2">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box_main">
                <div className="app_icon">
                  <img src={icon12} alt="frameworks Icon" />
                </div>
                <div className="app_icon_1">
                  <img src={icon13} alt="frameworks Icon Hover" />
                </div>
                <h4 className="services_text active"> React &  Anguler</h4>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="box_main">
                <div className="app_icon">
                  <img src={icon10} alt="Website Design Icon" />
                </div>
                <div className="app_icon_1">
                  <img src={icon11} alt="Website Design Icon Hover" />
                </div>
                <h4 className="services_text"> bootstrap </h4>
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
                <h4 className="services_text">Backend</h4>
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
                <h4 className="services_text">Coding</h4>
              </div>
            </div>
          </div>
          <div className="readmore_bt">
               <a href="/cv.pdf" download="Lina-Khaled-CV.pdf">Read More</a>
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}

export default Services;
