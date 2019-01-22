import * as React from 'react';
const styles = require('../../scss/components/Projects.scss');

const Projects = (props: {}) => (
  <div className={styles.projects}>
    <h2 className={styles.projectsTitle}>Projects</h2>
    <div className={styles.shoedidas}>
      <img className="shoedidasLogo"></img>
      <h3 className="shoedidasTitle">shoedidas</h3>
      <p className="shoedidasDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, incidunt alias consequatur ex ducimus adipisci inventore voluptatibus facere commodi nemo doloremque sunt magnam at provident debitis maiores perferendis ipsam numquam.</p>
    </div>
    <div className={styles.gomoku}>
      <img className="gomokuLogo"></img>
      <h3 className="gomokuTitle">Gomoku</h3>
      <p className="gomokuDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis ex itaque officiis molestiae, necessitatibus perferendis quas amet facere rerum repudiandae ratione at sint consectetur? Iste quidem nostrum porro doloribus?</p>
    </div>
  </div>
)

export default Projects