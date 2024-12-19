const Hero = () => {
  return (
    <div className="container-fluid p-0 mb-5 overflow-hidden" id="hero">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div id="hero-logo" className="col-md-8 col-lg-4 col-8 mt-4">
          <img
            src="./img/herologoa.png"
            alt=""
            className="img-fluid d-flex mx-auto"
          />
        </div>
      </div>
      <div className="row justify-content-center pb-5">
        <div className="col-sm-8 col-md-3 col-lg-4 col-xl-3 col-8 text-center">
          <a href="#memberships" className="btn btn-light w-100">
            Begin Your Practice
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
