import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row overflow-hidden">
          <nav className="d-flex justify-content-end gap-4 p-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <HashLink href="/#schedule" className="nav-link">
              Schedule
            </HashLink>
            <HashLink to="/#memberships" className="nav-link">
              Memberships
            </HashLink>
            <HashLink to="/#location" className="nav-link">
              Location
            </HashLink>
            <HashLink to="/#contact" className="nav-link">
              Contact
            </HashLink>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </nav>
        </div>
      </div>

      <div class="container">
        <div class="navbar navbar-expand-lg navbar-white bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="./img/nav-logo.png" alt="Logo" height="40" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#schedule">
                    Schedule
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#memberships">
                    Memberships
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#location">
                    Location
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
