'use client'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

interface CarouselProps {
  cards: JSX.Element[]
}

const CarouselContainer = styled.div`
  background-color: transparent;
  position: relative;
  min-height: 10em;
  display: grid;
  grid-template-columns: auto 1fr auto;
  min-width: 64px;

  > button {
    border: none;
    background: none;
    font-size: 3em;
    font-weight: bold;
    cursor: pointer;

    &:nth-child(2) {
      transform: scaleX(-1);
    }
  }

  > .listings {
    grid-area: 1 / 2;
    display: flex;
    gap: 1em;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scroll-padding-inline: 0.5em;
    overflow: auto;
    padding: 1em;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    > * {
      scroll-snap-align: start;
      min-width: 20em;
      position: relative;
    }
  }

  > .loader {
    position: absolute;
    inset: 0;
  }
`
const FlippedButton = styled.svg`
  transform: scaleX(-1);
`

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    const checkScrollbars = () => {
      setScrollable(
        carouselRef.current?.clientWidth! > 440 &&
          carouselRef.current?.clientWidth! < carouselRef.current?.scrollWidth!,
      )
    }

    checkScrollbars()

    const resizeObserver = new ResizeObserver(checkScrollbars)
    resizeObserver.observe(carouselRef.current!)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const moveNext = () => {
    const stepSize = carouselRef.current?.children?.[0]?.clientWidth ?? 0
    carouselRef.current?.scroll({
      top: 0,
      left: carouselRef.current.scrollLeft + stepSize,
      behavior: 'smooth',
    })
  }

  const movePrev = () => {
    const stepSize = carouselRef.current?.children?.[0]?.clientWidth ?? 0
    carouselRef.current?.scroll({
      top: 0,
      left: carouselRef.current.scrollLeft - stepSize,
      behavior: 'smooth',
    })
  }

  return (
    <CarouselContainer>
      <button onClick={movePrev}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 16C32 7.16129 24.8387 0 16 0C7.16129 0 0 7.16129 0 16C0 24.8387 7.16129 32 16 32C24.8387 32 32 24.8387 32 16ZM16 29.9355C8.34194 29.9355 2.06452 23.7355 2.06452 16C2.06452 8.34194 8.26452 2.06452 16 2.06452C23.6581 2.06452 29.9355 8.26452 29.9355 16C29.9355 23.6581 23.7355 29.9355 16 29.9355ZM10.4129 15.4516L17.8387 8.03226C18.1419 7.72903 18.6323 7.72903 18.9355 8.03226L19.3935 8.49032C19.6968 8.79355 19.6968 9.28387 19.3935 9.5871L12.9677 16L19.3871 22.4194C19.6903 22.7226 19.6903 23.2129 19.3871 23.5161L18.929 23.9742C18.6258 24.2774 18.1355 24.2774 17.8323 23.9742L10.4065 16.5548C10.1097 16.2452 10.1097 15.7548 10.4129 15.4516V15.4516Z"
            fill="#afafaf"
          />
        </svg>
      </button>
      <div ref={carouselRef} className="listings">
        {cards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
      <button onClick={moveNext} className="flipped">
        <FlippedButton
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 16C32 7.16129 24.8387 0 16 0C7.16129 0 0 7.16129 0 16C0 24.8387 7.16129 32 16 32C24.8387 32 32 24.8387 32 16ZM16 29.9355C8.34194 29.9355 2.06452 23.7355 2.06452 16C2.06452 8.34194 8.26452 2.06452 16 2.06452C23.6581 2.06452 29.9355 8.26452 29.9355 16C29.9355 23.6581 23.7355 29.9355 16 29.9355ZM10.4129 15.4516L17.8387 8.03226C18.1419 7.72903 18.6323 7.72903 18.9355 8.03226L19.3935 8.49032C19.6968 8.79355 19.6968 9.28387 19.3935 9.5871L12.9677 16L19.3871 22.4194C19.6903 22.7226 19.6903 23.2129 19.3871 23.5161L18.929 23.9742C18.6258 24.2774 18.1355 24.2774 17.8323 23.9742L10.4065 16.5548C10.1097 16.2452 10.1097 15.7548 10.4129 15.4516V15.4516Z"
            fill="#afafaf"
          />
        </FlippedButton>
      </button>
    </CarouselContainer>
  )
}

export default Carousel
;``
