import * as React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
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
  
         <NavBar />

        <div className={styles.homeItem}>
          <Home />
        </div>
        <div className="aboutItem">
          <About />
        </div>
        <div className="projectsItem">
          <Projects />
        </div>
        <div className="contactItem">
          <Contact />
        </div>
      </div>
    )
  }
}

