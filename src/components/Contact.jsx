export default function Contact() {
  return (
    <div className="row mb-5 pb-3">
      <div className="col-md-6 p-2 ">
        <img src="./img/bottom-new.jpg" className="img-fluid object-fit-cover rounded" alt="brazilian jiu jitsu" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="col-sm-12 col-md-6">
        <h1 id="contact" className="mb-3">
          Contact Us
        </h1>
        <p>Have a question or want to chat? Connect with us @:</p>
        {/* <form name="contant" netlify>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control border-dark" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control border-dark" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input type="tel" className="form-control border-dark" id="phone" name="phone" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control border-dark" id="message" name="message" rows="3" required></textarea>
          </div>

          <button type="submit" className="w-100 btn btn-dark mt-2">
            Submit
          </button>
        </form> */}

        <a class="mb-3 w-100 btn btn-outline-dark" href="https://www.facebook.com/OhanaYogaNC" target="_blank" rel="noreferrer">
          <i class="fab fa-facebook-square fa-lg contact-icon"></i>
        </a>

        <a class="mb-3 w-100 btn btn-outline-dark" href="https://www.instagram.com/ohanayoganc/">
          <i class="fab fa-instagram fa-lg contact-icon"></i>
        </a>

        <a class="d-block mb-3 btn btn-outline-dark py-2" href="sms:808-342-8744">
          <i class="fas fa-mobile-alt fa-lg contact-icon"></i>{' '}
        </a>
      </div>
    </div>
  );
}
