import * as React from 'react';
const styles = require('../../scss/styles.scss');

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = (props: HelloProps) => (
  <h1 className={styles.test}>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export default Hello;
