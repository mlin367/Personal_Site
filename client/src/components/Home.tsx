import * as React from 'react';

const Home = (props : {}) => (
  <div className="home">
    <div className="homeWrapper1">
      <h1 className="webDeveloper">
        Web Developer
      </h1>
      <div className="underline">

      </div>
      <div className="homeWrapper2">
        <span className="design"> Design</span>
        <span className="dash">-</span>
        <span className="create">Create</span>
        <span className="dash">-</span>
        <span className="deploy">Deploy</span>
      </div>
    </div>
  </div>
);

export default Home