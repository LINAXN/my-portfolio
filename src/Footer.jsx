import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
  return (
    <footer id="footer" className="footer_section text-center py-5 text-light">
      <div className="container">
     
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-3">
            <a href="#"><i className="fa fa-map-marker fa-2x text-light"></i></a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="#"><i className="fa fa-phone fa-2x text-light"></i></a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="#"><i className="fa fa-envelope fa-2x text-light"></i></a>
          </li>
        </ul>
        <p className="mt-3"> Lina khaled Alhumaidi </p>
      </div>
    </footer>
  );
}

export default Footer;
