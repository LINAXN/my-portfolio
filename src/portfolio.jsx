
function App() {
  return (
    <div>
  
  
      {/* Portfolio Section */}
      <div className="portfolio_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="portfolio_taital">My <span className="portfolio_taital_1">Portfolio</span></h1>
            </div>
          </div>

          <div className="portfolio_section_2">
            <div className="row">
              {['img-1.png', 'img-2.png', 'img-3.png', 'img-4.png', 'img-5.png'].map((img, index) => (
                <div className="col-md-4" key={index}>
                  <div className="container_main">
                    <img src={`/images/${img}`} alt="" className="image" />
                    <div className="overlay">
                      <div className="text">
                        <div className="btn_main">
                          <div className="buy_bt"><a href="#">See More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="seemore_bt"><a href="#">See More</a></div>
        </div>
      </div>

      
      {/* Copyright */}
   
    </div>
  );
}

export default App;
