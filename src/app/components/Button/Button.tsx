'use client'
import React from 'react'
import { SyntheticEvent } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  readonly id: string
  readonly onClick: (event: SyntheticEvent) => void
  readonly loading: boolean
  readonly disabled: boolean
  readonly children: React.ReactNode
  readonly color?: 'blue' | 'red' | 'green'
  readonly className?: string
}

const Button: React.FC<ButtonProps> = ({
  id,
  onClick,
  loading,
  disabled,
  children,
  color = 'blue',
  className,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${loading && styles.loading} ${
        styles[color]
      } ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
