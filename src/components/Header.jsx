import NavLink from './NavLink';

export default function Header() {
  return (
    <>
      <div class="container">
        <div class="navbar navbar-expand-lg navbar-white bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              <img src="./img/nav-logo.png" alt="ohana yoga jacksonville nc logo" height="40" />
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
                  <NavLink navLocation="schedule" />
                </li>
                <li class="nav-item">
                  <NavLink navLocation="memberships" />
                </li>
                <li class="nav-item">
                  <NavLink navLocation="location" />
                </li>
                <li class="nav-item">
                  <NavLink navLocation="contact" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
