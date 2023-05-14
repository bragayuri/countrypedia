'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Icon from '../Icon/Icon'
import styles from './Modal.module.scss'
import chevronLeft from 'src/assets/svg/chevronLeft.svg'
import closeIcon from 'src/assets/svg/closeIcon.svg'
import expandIcon from 'src/assets/svg/expandIcon.svg'

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
        aria-label="Minimize Modal"
        onMouseEnter={handleMouseEnter}
        onClick={handleExpandClick}
        className={`${styles.hoverButton} ${
          expanded && !showControls ? styles.show : ''
        }`}
      >
        <Icon
          alt="leftChevronModal"
          id="leftChevronModal"
          svg={chevronLeft}
          width={9}
          height={16}
        />
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
          <Icon
            alt="closeIconModal"
            id="closeIconModal"
            svg={closeIcon}
            width={12}
            height={12}
          />
        </button>
        <button
          aria-label="Expand Modal"
          tabIndex={1}
          onClick={handleExpandClick}
          className={styles.expandButton}
        >
          <Icon
            alt="expandIconModal"
            id="expandIconModal"
            svg={expandIcon}
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className={`${expanded ? styles.expanded : styles.modalContent}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
