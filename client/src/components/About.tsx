import * as React from 'react';
const styles = require('../../scss/components/About.scss');

const About = (props: {}) => (
  <div className={styles.about}>
    <h2 className={styles.like}>About</h2>
    <img
      src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/46879896_328645761199267_4156118004117012480_n.jpg?_nc_cat=104&_nc_ht=scontent-lax3-1.xx&oh=80eb43c742b67ec0b231b54234dd06d0&oe=5CBC11E3"
      className={styles.selfie}
    />
    <p className={styles.description}>
      Hi, my name is Matthew Lin. I graduated from UCSD with a chemical
      engineering degree. Although I enjoyed the skills that the field provided
      me, I yearned for something more practical and decided to pursue
      programming. Since then, I've build full stack applications, utilizing
      both front-end and back-end technologies, and I am constantly exposing
      myself to new tech stacks as I enjoy learning and new challenges. I am
      aiming to become a full-fledged software engineer, with an emphasis on
      front-end and full stack development. Please take a look at resume to get
      a more in-depth look on my skills and projects. If any of it interests
      you, feel free to get in touch with me with any of the contact information
      I have provided. I hope you have a good day!
    </p>
  </div>
);

export default About;
