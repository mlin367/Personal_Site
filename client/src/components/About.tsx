import * as React from 'react';
const styles = require('../../scss/components/About.scss');

const About = (props: {}) => (
  <div className={styles.about}>
    <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/46879896_328645761199267_4156118004117012480_n.jpg?_nc_cat=104&_nc_ht=scontent-lax3-1.xx&oh=80eb43c742b67ec0b231b54234dd06d0&oe=5CBC11E3" className={styles.selfie}></img>
    <h2 className={styles.like}>I like to Create...</h2>
    <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ducimus alias praesentium harum in placeat quos illum dolorum sapiente expedita quisquam reprehenderit quasi facere, dicta dolores nemo rem quaerat odit.</p>
  </div>
)

export default About