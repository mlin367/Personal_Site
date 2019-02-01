import * as React from 'react';
const styles = require('../../scss/components/About.scss');

const About = (props: {}) => (
  <div className={styles.about}>
    <h2 className={styles.like}>About</h2>
    <img
      src="https://s3.us-east-2.amazonaws.com/matthew-site/me.jpg"
      className={styles.selfie}
    />
    <p className={styles.description}>
      Hi, my name is Matthew Lin and I graduated from UCSD with a chemical
      engineering degree. Although I enjoyed the skills that the field provided
      me, I yearned for something more practical and decided to pursue
      programming. Since then, I've built full stack applications, utilizing
      both front-end and back-end technologies, and I am constantly exposing
      myself to new tech stacks as I enjoy learning and new challenges.
      <br />
      <br />I am aiming to become a full-fledged software engineer, with an
      emphasis on front-end and full stack development. Please take a look at
      resume to get a more in-depth look on my skills and projects. If any of it
      interests you, feel free to get in touch with me through any of the
      contact information I have provided. I hope you have a good day!
    </p>
  </div>
);

export default About;
