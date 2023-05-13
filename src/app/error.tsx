'use client'

import { useEffect } from 'react'
import Icon from './components/Icon/Icon'
import styles from './page.module.scss'
import errorIcon from 'src/assets/errorIcon.svg'

interface ErrorProps {
  error?: Error
  reset: () => void
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])
  const onClickTryAgain = () => reset()

  return (
    <div className={styles.errorContainer}>
      <Icon
        alt="error icon"
        id="errorIcon"
        width={80}
        height={80}
        svg={errorIcon}
      />
      <h2 className={styles.errorMessage}>Something went wrong!</h2>
      <button
        id="errorButton"
        aria-label="error button"
        className={styles.errorButton}
        onClick={onClickTryAgain}
      >
        Try again
      </button>
    </div>
  )
}

export default Error
