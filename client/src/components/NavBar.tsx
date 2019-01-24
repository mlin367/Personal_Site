import * as React from 'react';
import { Link } from 'react-scroll';
const styles = require('../../scss/components/NavBar.scss');

interface NavBarProps {

}

const NavBar = (props : NavBarProps) => (
  <nav className={styles.navBar}>
    <div className={styles.name}>
      Matthew Lin
    </div>
      <div className={styles.sections}>
        <div className="home">
          <Link activeClass="active" className="section1" to="section1" spy={true} smooth={true} duration={500} >Home</Link>
        </div>
        <div className="about">
          <Link offset={50} activeClass="active" className="section2" to="section2" spy={true} smooth={true} duration={500} >About</Link>
        </div>
        <div className="projects">
          <Link activeClass="active" className="section3" to="section3" spy={true} smooth={true} duration={500} >Projects</Link>
        </div>
        <div className="resume">
          Resume
        </div>
        <div className="contact">
          <Link activeClass="active" className="section4" to="section4" spy={true} smooth={true} duration={500} >Contact</Link>
        </div>
      </div>
  </nav>
);

export default NavBar