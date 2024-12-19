export default function Location() {
  return (
    <div className="row custom-border mb-5 pb-5">
      <div className="col-12">
        <h1 id="location" className="mb-3">
          Location
        </h1>
        <p>
          <i className="fas fa-map-marker-alt"></i> 233 Western Blvd I, Jacksonville, NC 28546
        </p>
        <p>
          <i className="fas fa-phone-alt"></i> 808-342-8744
        </p>
      </div>
      <div className="col-md-12 p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.0520840146883!2d-77.38390064865902!3d34.75428078032469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9105b75974bb3%3A0x81dee9e80f0b2a33!2sOhana%20Yoga%20NC!5e0!3m2!1sen!2sus!4v1677384793096!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
}
