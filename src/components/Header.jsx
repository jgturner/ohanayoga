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
}
