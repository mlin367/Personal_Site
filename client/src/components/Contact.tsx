import * as React from 'react';
const styles = require('../../scss/components/Contact.scss');

const Contact = (props: {}) => (
  <div className={styles.contact}>
    <h2 className={styles.contactTitle}>Contact</h2>
    <div className={styles.contactWrapper1}>
      <img src="https://img.freepik.com/free-icon/email-envelope-outline-shape-with-rounded-corners_318-49938.jpg?size=338&ext=jpg" className={styles.emailIcon}></img>
      <a className="email">mlin36729@gmail.com</a>
    </div>
    <div className={styles.contactWrapper2}>
      <img src="http://www.stickpng.com/assets/thumbs/5a4525b2546ddca7e1fcbc82.png" className={styles.phoneIcon}></img>
      <span className={styles.phoneNumber}>+1-714-876-7358</span>
    </div>
    <div className={styles.contactWrapper3}>
      <a target="_blank" href="https://github.com/mlin367"><i className={`fab fa-github fa-3x ${styles.gitIcon}`}></i></a> 
      <a target="_blank" href="https://linkedin.com/in/mlin367"><i className={`fab fa-linkedin fa-3x ${styles.linkedinIcon}`}></i></a>
    </div>
  </div>
)

export default Contact