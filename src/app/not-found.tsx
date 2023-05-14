'use client'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: whitesmoke;
`

const Content = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Illustration = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 2rem;
`

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: $whitesmoke;
  color: black;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`

const NotFoundPage = () => {
  const handleGoHome = () => {
    window.location.href = '/'
  }

  return (
    <Container>
      <Content>
        <Illustration src="/404.svg" alt="404 Illustration" />
        <Title>
          404 - Oops, there was an error retrieving the requested information!
        </Title>
        <Description>The page you are looking for does not exist.</Description>
        <LinkButton onClick={handleGoHome}>Back to home page</LinkButton>
      </Content>
    </Container>
  )
}

export default NotFoundPage
