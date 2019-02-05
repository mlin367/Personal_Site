import * as React from 'react';
const styles = require('../../scss/components/Home.scss');

const Home = (props : {}) => (
  <div className={styles.home}>
    <div className={styles.homeWrapper1}>
      <h1 data-shadow="Web Developer" className={styles.webDeveloper}>
        Web Developer
      </h1>
      <hr className={styles.underline}>

      </hr>
      <div className={styles.homeWrapper2}>
        <span className="design"> Design</span>
        {/* <span className="dash"> - </span> */}
        <span className="create"> - Create - </span>
        {/* <span className="dash"> - </span> */}
        <span className="deploy">Deploy</span>
      </div>
    </div>
  </div>
);

export default Home