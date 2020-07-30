import React from 'react'
import styles from './Header.module.css'
const header = props => (
  <p className={styles.P}>You Have Correctly {props.num} Messions</p>
)

export default header
