import React from 'react'
import styles from './Skeleton.module.scss'

type SkeletonProps = {
  readonly className?: string
  readonly count: number
  readonly id: string
}

const Skeleton: React.FC<SkeletonProps> = ({ className, count = 5, id }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          id={`${id}-${count}`}
          className={`${styles.skeletonItem} ${styles.animation} ${styles.className} `}
          key={index}
        />
      ))}
    </>
  )
}

export default Skeleton
