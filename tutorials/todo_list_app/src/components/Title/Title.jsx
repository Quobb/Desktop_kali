/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Title.module.css'
import  Typography  from '../Typography/Typography'


function Title() {
  return (
    <div className={styles.titleContainer} >
      <Typography fontSize={24} bold >
      Simple Todo list
        </Typography>
    </div>
  )
}

export default Title
