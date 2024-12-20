export default function NavLink({ navLocation }) {
  //Smooth Scroll
  function smoothScroll(location) {
    const anchor = document.querySelector(`#${location}`);
    console.log(anchor);

    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="nav-link text-capitalize" onClick={() => smoothScroll(`${navLocation}`)}>
      {navLocation}
    </div>
  );
}
