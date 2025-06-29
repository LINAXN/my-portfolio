import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // مهم لتشغيل Navbar Toggle


function Footer() {
  return (
  <section id="Footer" className="section">
    <div className="footer_section">
      <div className="container">
        <div className="location_text">
          <ul>
            <li>
              <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Footer;
