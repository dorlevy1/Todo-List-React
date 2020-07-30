import React from 'react'
import style from './Form.module.css'
const form = props => (
  //   <div >
  <form className={style.FlexRow} onSubmit={props.handleSubmit}>
    <input
      value={props.value}
      onChange={props.handleChange}
      className={style.Input}
      type='text'
    />
    <input className={style.Button} type='submit' value='Click' />
  </form>
  //   </div>
)

export default form
