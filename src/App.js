import './css/styles.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Memberships from './components/Memberships';
import Instructor from './components/Instructor';
import Events from './components/Events';
import Location from './components/Location';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <div className="container">
                <Schedule />
                <Memberships />
                <Instructor />
                <Events />
                <Location />
                <Contact />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
