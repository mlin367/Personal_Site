import * as React from 'react';
const styles = require('../../scss/components/Projects.scss');

const Projects = (props: {}) => (
  <div className={styles.projects}>
    <h2 className={styles.projectsTitle}>Projects</h2>
    <div className={styles.shoedidas}>
      <img
        src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg"
        className={styles.shoedidasLogo}
      />
      <h3 className={styles.shoedidasTitle}>shoedidas</h3>
      <p className={styles.shoedidasDescription}>
        shoedidas is a full stack application built by 4 team members. The aim
        of the site is to replicate the adidas product page to look as close to
        the real thing as possible. My component was the ratings/reviews section
        and the footer. Feel free to take a look at my github and the link to
        find out more about this application!
      </p>
      <div className={styles.shoedidasLinks}>
        <a className={styles.shoeGit} target="_blank" href="https://github.com/mlin367/Adidas-Clone">Github</a>
        <a className={styles.shoeLink} target="_blank" href="http://54.146.229.91/">Link</a>
      </div>
    </div>
    <div className={styles.gomoku}>
      <img
        src="https://s3.us-east-2.amazonaws.com/matthew-site/gomokuPic.JPG"
        className={styles.gomokuLogo}
      />
      <h3 className={styles.gomokuTitle}>Gomoku</h3>
      <p className={styles.gomokuDescription}>
        Gomoku is a game played on a 15 x 15 board played by two players where
        the first player to connect five stones in a row wins. This application
        was built utilizing web sockets and so two players can play against each
        other in real time. Feel free to take a look at my github and the link
        to find out more about this application (currently NOT mobile friendly)!
      </p>
      <div className={styles.gomokuLinks}>
        <a className={styles.goGit} target="_blank" href="https://github.com/mlin367/MVP-2.0">Github</a>
        <a className={styles.goLink} target="_blank" href="http://18.223.98.89:1337/">Link</a>
      </div>
    </div>
  </div>
);

export default Projects;
