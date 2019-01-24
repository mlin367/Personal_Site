import * as React from 'react';
const styles = require('../../scss/components/Projects.scss');

const Projects = (props: {}) => (
  <div className={styles.projects}>
    <h2 className={styles.projectsTitle}>Projects</h2>
    <div className={styles.shoedidas}>
      <img src="https://s3-us-west-1.amazonaws.com/shoedidas-static/assets/img/shoedidas_white_5.svg" className={styles.shoedidasLogo}></img>
      <h3 className={styles.shoedidasTitle}>shoedidas</h3>
      <p className={styles.shoedidasDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, incidunt alias consequatur ex ducimus adipisci inventore voluptatibus facere commodi nemo doloremque sunt magnam at provident debitis maiores perferendis ipsam numquam.</p>
      <div className={styles.shoedidasLinks}>
        <a>Github</a>
        <a>Link</a>
      </div>
    </div>
    <div className={styles.gomoku}>
      <img src="https://s3.us-east-2.amazonaws.com/matthew-site/gomokuPic.JPG" className={styles.gomokuLogo}></img>
      <h3 className={styles.gomokuTitle}>Gomoku</h3>
      <p className={styles.gomokuDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis ex itaque officiis molestiae, necessitatibus perferendis quas amet facere rerum repudiandae ratione at sint consectetur? Iste quidem nostrum porro doloribus?</p>
      <div className={styles.gomokuLinks}>
        <a>Github</a>
        <a>Link</a>
      </div>
    </div>
  </div>
)

export default Projects