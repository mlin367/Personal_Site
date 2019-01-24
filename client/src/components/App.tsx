import * as React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Element } from 'react-scroll';
const styles = require('../../scss/components/App.scss');

interface AppProps {}
interface AppState {
  section: string;
}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      section: 'home'
    };
  }

  render() {
    return (
      <div className="AppMain"> 
        <NavBar/>
        <Element name="section1" className={styles.homeItem}>
          <Home />
        </Element>
        <Element name="section2" className={styles.aboutItem}>
          <About />
        </Element>
        <Element name="section3" className={styles.projectsItem}>
          <Projects />
        </Element>
        <Element name="section4" className={styles.contactItem}>
          <Contact />
        </Element>

      </div>
    )
  }
}

