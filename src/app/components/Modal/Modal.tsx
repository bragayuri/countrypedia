'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Modal.module.scss'

interface ModalProps {
  open: boolean
  onClose: () => void
  children?: ReactNode
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  const [expanded, setExpanded] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const showButtons = !expanded || showControls
  const buttonWrapperRef = useRef<HTMLDivElement>(null)

  const handleExpandClick = () => setExpanded(!expanded)
  const handleMouseEnter = () => setShowControls(true)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonWrapperRef.current &&
      !buttonWrapperRef.current.contains(event.target as Node)
    ) {
      setShowControls(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (expanded && showControls) {
        setShowControls(false)
      }
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [expanded, showControls])

  return (
    <div className={`${styles.modalBackDrop} ${open ? styles.opened : ''}`}>
      <button
        onMouseEnter={handleMouseEnter}
        onClick={handleExpandClick}
        className={`${styles.hoverButton} ${
          expanded && !showControls ? styles.show : ''
        }`}
      >
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.527344 7.65234L7.27734 0.9375C7.59375 0.585937 8.12109 0.585937 8.47266 0.9375C8.78906 1.25391 8.78906 1.78125 8.47266 2.09766L2.28516 8.25L8.4375 14.4375C8.78906 14.7539 8.78906 15.2812 8.4375 15.5977C8.12109 15.9492 7.59375 15.9492 7.27734 15.5977L0.527344 8.84766C0.175781 8.53125 0.175781 8.00391 0.527344 7.65234Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        id="buttonWrapper"
        ref={buttonWrapperRef}
        className={`${styles.buttonWrapper} ${showButtons ? styles.show : ''}`}
      >
        <button
          aria-label="Close Modal"
          tabIndex={0}
          onClick={onClose}
          className={styles.closeButton}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3789 2.06641L7.16016 6.28516L11.3438 10.4687C11.6953 10.7852 11.6953 11.3125 11.3438 11.6289C11.0273 11.9805 10.5 11.9805 10.1836 11.6289L5.96484 7.44531L1.78125 11.6289C1.46484 11.9805 0.9375 11.9805 0.621094 11.6289C0.269531 11.3125 0.269531 10.7852 0.621094 10.4336L4.80469 6.25L0.621094 2.06641C0.269531 1.75 0.269531 1.22266 0.621094 0.871094C0.9375 0.554687 1.46484 0.554687 1.81641 0.871094L6 5.08984L10.1836 0.90625C10.5 0.554687 11.0273 0.554687 11.3789 0.90625C11.6953 1.22266 11.6953 1.75 11.3789 2.06641Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          aria-label="Expand Modal"
          tabIndex={1}
          onClick={handleExpandClick}
          className={styles.expandButton}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.21875 5.71875L13.4375 1.5L10.75 1.5C10.3125 1.5 10 1.1875 10 0.75C10 0.34375 10.3125 0 10.75 0L15.2188 0C15.6562 0 15.9688 0.34375 15.9688 0.75V5.25C15.9688 5.6875 15.6563 6 15.2188 6C14.8125 6 14.4688 5.6875 14.4688 5.25V2.5625L10.25 6.78125C9.96875 7.09375 9.5 7.09375 9.21875 6.78125C8.90625 6.5 8.90625 6.03125 9.21875 5.71875ZM6.78125 10.2812L2.53125 14.5H5.25C5.65625 14.5 6 14.8437 6 15.25C6 15.6875 5.65625 16 5.25 16H0.75C0.3125 16 0 15.6875 0 15.25L0 10.75C0 10.3438 0.3125 10 0.75 10C1.15625 10 1.5 10.3438 1.5 10.75L1.5 13.4688L5.71875 9.25C6 8.9375 6.46875 8.9375 6.78125 9.25C7.0625 9.53125 7.0625 10 6.78125 10.2812Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={`${expanded ? styles.expanded : styles.modalContent}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
