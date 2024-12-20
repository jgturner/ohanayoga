export default function Footer() {
  const date = new Date();

  //Smooth Scroll
  function smoothScroll(location) {
    const anchor = document.querySelector(`#${location}`);
    console.log(anchor);

    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      <div id="footer" className="row justify-content-center mt-5">
        <div className="col-md-3 col-sm-12">
          <img src="./img/OhanaYogaLogo.png" alt="ohana yoga jacksonville nc logo" className="flex mx-auto mb-4" width="125" />
        </div>

        <div className="col-sm-6 col-md-3 offset-md-3 offset-0 col-6 mb-4">
          <h3 className="mb-3">Follow Us</h3>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li>
              <a className="nav-link" href="https://www.instagram.com/ohanayoganc/">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a className="nav-link" href="https://www.facebook.com/OhanaYogaNC/">
                <i className="fab fa-facebook-square"></i> Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-3 col-xs-6 col-6">
          <h3 className="mb-3">Site Map</h3>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li>
              <div className="nav-link text-left" onClick={() => smoothScroll('schedule')}>
                Schedule
              </div>
            </li>
            <li>
              <div className="nav-link" onClick={() => smoothScroll('memberships')}>
                Memberships
              </div>
            </li>

            <li>
              <div className="nav-link" onClick={() => smoothScroll('location')}>
                Location
              </div>
            </li>
            <li>
              <div className="nav-link" onClick={() => smoothScroll('contact')}>
                Contact Us
              </div>
            </li>
          </ul>
        </div>

        <p className="mt-5 mb-0 text-center pb-4">&copy; {date.getFullYear()} Ohana Yoga NC 🐐</p>
      </div>
    </>
  );
}
