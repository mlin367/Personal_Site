import * as React from 'react';

interface AppProps {}
interface AppState {
  section: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      section: 'home'
    };
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;
