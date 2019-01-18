import * as React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

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
        <div className="navItem">
         <NavBar />
        </div>
        <div className="homeItem">
          <Home />
        </div>
        <div className="aboutItem">
          <About />
        </div>
        <div className="projectsItem">

        </div>
        <div className="footerItem">

        </div>
      </div>
    )
  }
}

