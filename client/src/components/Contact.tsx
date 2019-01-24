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
      <img src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png" className={styles.gitIcon}></img>
      <img src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" className={styles.linkedinIcon}></img>
    </div>
  </div>
)

export default Contact