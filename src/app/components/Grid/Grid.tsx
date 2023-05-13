import React from 'react'
import styles from './Grid.module.scss'
type GridProps = {
  readonly children: React.ReactNode
}
const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>{children}</div>
    </div>
  )
}

export default Grid
