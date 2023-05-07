import React from 'react'
import { Page } from '../../layout/Page'
import { Container, Flex , Box} from '@mantine/core'
import { Heading, Text } from '../../layout/Typography'
import bannerImg  from '../../../assets/images/about-us/about-banner.png'
import { Button } from '../../layout/Button'
export const Banner = () => {
  return (
    <Page>
        <Container maw='1280px' pt='11.25rem'>
            <Flex gap={40}>
                <Box>
                  <Heading>Making Technology Work for You</Heading>
                  <Text mt='40px'>Startups. SMEs. Enterprises</Text>
                  <Text color='#2e2e2e' size='20px' height='32px' mt='10px'>Techtiz is a custom software development company that helps startups and businesses of all sizes create chart topping apps and software. We have a team of super-talented engineers with advanced expertise in mobile app development, web application development, UX/UI design, and more. With on-time enterprise-level implementation, we have a proven track record of helping diverse businesses embark on their transformation journeys.</Text>
                  <Button mt='40px'>Talk to Us</Button>
                </Box>
                <Box>
                  <img src={bannerImg.src} alt="banner-img" />
                </Box>
            </Flex>
        </Container>
    </Page>
  )
}
