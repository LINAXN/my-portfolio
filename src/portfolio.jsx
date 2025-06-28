import Warq from './assets/Warq.jpg';
import Movie from './assets/Movieplanner.png';
function App() {
  const images = [Warq,Movie]; // هنا استخدمنا الصورة المستوردة مباشرة

  return (
    <div>
      {/* Portfolio Section */}
      <div className="portfolio_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="portfolio_taital">
                My <span className="portfolio_taital_1">Portfolio</span>
              </h1>
            </div>
          </div>

          <div className="portfolio_section_2">
            <div className="row">
              {images.map((img, index) => (
                <div className="col-md-4" key={index}>
                  <div className="container_main">
                    <img src={img} alt="" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt">
                            <a href="https://github.com/AngelInvestorsPlatform/Angel-Investors-Platform">See</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="seemore_bt">
            <a  style={{
    marginTop: '20px'}}
    href="#">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
