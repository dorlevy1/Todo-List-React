import React from 'react'
import Aux from '../hoc/Auxialliary/Auxialliary'
import styles from './Wrapper.module.css'
const wrapper = props => <Aux className={styles.Wrapper}>{props.children}</Aux>

export default wrapper
