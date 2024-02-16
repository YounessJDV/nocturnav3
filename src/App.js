import React from 'react';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";
import './App.css';

// AOS ANIMATIONS //
import AOS from "aos";
import "aos/dist/aos.css";

// SCROLL TO TOP when NAVIGATION //
import ScrollToTop from './components/scrolltotop';

// Components IMPORT //
import Navbar from './components/Navbar'
import Header from './components/header'
import Features from './components/features'
import SectionOne from './components/sectionOne'
import Offres from './components/offres'
import Faq from './components/faq'
import Cta from './components/cta'
import Footer from './components/footer'
import Realisations from "./components/realisations"
import Contact from './components/contact';
import MentionsLegales from './components/mentionsLegales';

function App() {
  
  useEffect(() => {
    AOS.init(); 
   }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App" id="scrolltest">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> 
                <Header className="z-10" />
                <Features className="z-0"  />
                <SectionOne/>
                <Offres/>
                <Faq/>
                <Cta/>
                <Footer/>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/mentionsLegales"
            element={
              <>
                <MentionsLegales />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
