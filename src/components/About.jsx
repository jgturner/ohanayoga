import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>About Ohana Yoga</h1>
        <p>
          Ohana Yoga is a welcoming community where people of all ages, backgrounds, and fitness levels can come together to practice yoga and connect with one another.
          Our mission is to create a safe and supportive space where students can explore their physical, mental, and emotional well-being through the transformative
          practice of yoga. We offer a variety of classes and workshops, taught by experienced instructors who are passionate about sharing the benefits of yoga with
          others. Whether you're new to yoga or a seasoned practitioner, we invite you to join us and become a part of our family.
        </p>
        <Footer />
      </div>
    </>
  );
}
