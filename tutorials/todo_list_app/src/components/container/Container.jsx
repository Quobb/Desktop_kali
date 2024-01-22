/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import  styles from './Container.module.css';

function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;


