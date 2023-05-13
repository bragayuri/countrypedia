'use client'
import React, { ReactNode } from 'react'
import { ContainerWrapper } from './Container.styles'

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
