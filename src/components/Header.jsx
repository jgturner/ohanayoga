export default function Header() {
  //Smooth Scroll
  function smoothScroll(location) {
    const anchor = document.querySelector(`#${location}`);
    console.log(anchor);

    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
                  <div class="nav-link" onClick={() => smoothScroll('schedule')}>
                    Schedule
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" onClick={() => smoothScroll('memberships')}>
                    Memberships
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" onClick={() => smoothScroll('location')}>
                    Location
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" onClick={() => smoothScroll('contact')}>
                    Contact
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
