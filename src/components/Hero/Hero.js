import React from 'react'
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from './HeroStyles'
import { Button, Container, MainHeading } from '../../globalStyles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/hero.mp4" autoPlay muted  />
        <Container>
            <MainHeading>Your Data is Secured With Us.
            </MainHeading>
            <HeroText>
            We provide the best security systems for clients all over the world
            </HeroText>
            <ButtonWrapper>
                <Link to="signup">
						<Button>Get Started</Button>
					</Link>
				<HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero