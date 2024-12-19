export default function Memberships() {
  return (
    <div className="row mb-5 custom-border">
      <h1 id="memberships" className="mb-4">
        Memberships & Passes
      </h1>
      <div className="row mb-5">
        <div className="col-md-6 col-lg-4 mb-3">
          <h2 className="mb-4">10 Class Pass $125</h2>
          <p className="mb-4">
            "Elevate your practice and save with our $125 10-class yoga pass, designed to help you find balance, strength, and inner peace through a transformative yoga
            experience."
          </p>

          <ul className="d-flex gap-2 list-unstyled">
            <li className="btn btn-dark w-75 healcode">
              <healcode-widget
                data-version="0.2"
                data-link-class="healcode-pricing-option-text-link"
                data-site-id="52361"
                data-mb-site-id="788339"
                data-bw-identity-site="false"
                data-type="pricing-link"
                data-inner-html="Get Pass"
                data-service-id="100004"
              />
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <h2 className="mb-4">5 Class Pass $75</h2>
          <p className="mb-4">
            "Discover the power of yoga and rejuvenate your body and mind with our 5-class yoga pass for just $75, offering a convenient and affordable way to experience
            the transformative benefits of yoga."
          </p>

          <ul className="d-flex gap-2 list-unstyled">
            <li className="btn btn-dark w-75 healcode">
              <healcode-widget
                data-version="0.2"
                data-link-class="healcode-pricing-option-text-link"
                data-site-id="52361"
                data-mb-site-id="788339"
                data-bw-identity-site="false"
                data-type="pricing-link"
                data-inner-html="Get Pass"
                data-service-id="100003"
              />
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <h2 className="mb-4">Drop-in Pass $20</h2>
          <p className="mb-4">
            "Experience the joy of yoga and nourish your soul with our drop-in yoga pass for just $20, providing a flexible and accessible way to join our vibrant
            community and elevate your practice."
          </p>

          <ul className="d-flex gap-2 list-unstyled">
            <li className="btn btn-dark w-75 healcode">
              <healcode-widget
                data-version="0.2"
                data-link-class="healcode-pricing-option-text-link"
                data-site-id="52361"
                data-mb-site-id="788339"
                data-bw-identity-site="false"
                data-type="pricing-link"
                data-inner-html="Get Pass"
                data-service-id="100002"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
