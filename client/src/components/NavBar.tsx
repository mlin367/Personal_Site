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
          <Link activeClass="active" className={styles.section1} to="section1" spy={true} offset={-80} smooth={true} duration={500} >Home</Link>
        </div>
        <div className="about">
          <Link activeClass="active" className={styles.section2} to="section2" spy={true} offset={-60} smooth={true} duration={500} >About</Link>
        </div>
        <div className="projects">
          <Link activeClass="active" className={styles.section3} to="section3" spy={true} offset={-60} smooth={true} duration={500} >Projects</Link>
        </div>
        <div className={styles.resume}>
          Resume
        </div>
        <div className={styles.section4}>
          <Link activeClass="active" className="section4" to="section4" spy={true} offset={-60} smooth={true} duration={500} >Contact</Link>
        </div>
      </div>
  </nav>
);

export default NavBar