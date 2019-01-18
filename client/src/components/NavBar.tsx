import * as React from 'react';
const styles = require('../../scss/components/NavBar.scss');

interface NavBarProps {

}

const NavBar = (props : NavBarProps) => (
  <nav className={styles.navBar}>
    <div className={styles.logoName}>
      <div className="logo">
        ML
      </div>
      <div className="name">
        Matthew Lin
      </div>
    </div>
    <div className={styles.sections}>
      <div className="home">
        Home
      </div>
      <div className="about">
        About
      </div>
      <div className="projects">
        Projects
      </div>
      <div className="resume">
        Resume
      </div>
      <div className="contact">
        Contact
      </div>
    </div>
  </nav>
);

export default NavBar