import React from 'react'
import styles from './List.module.css'
const list = props => {
  const listArr = props.list.map(mession => {
    return (
      <tr key={mession.id} className={styles.Tr}>
        <td className={styles.Td} key={mession.id}>
          {mession.name}
        </td>
        <td
          onClick={() => props.filt(mession.id)}
          className={[styles.cursor, styles.radius].join(' ')}
        >
          X
        </td>
      </tr>
    )
  })
  return (
    <table className={styles.Table}>
      <tbody>{listArr}</tbody>
    </table>
  )
}

export default list
