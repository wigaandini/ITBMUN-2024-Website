import "./App.css";
import React, { useState } from "react";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import SecFooter from "./components/secfooter.jsx";
import Registration from "./pages/registration.jsx";
import About from "./pages/about.jsx";
import NotFound from "./pages/notfound.jsx";
import Contact from "./pages/contact.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Router>
        <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <Switch>
          <Route path="/" element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
        <SecFooter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
