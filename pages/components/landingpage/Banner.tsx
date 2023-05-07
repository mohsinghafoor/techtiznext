import { Container, Flex } from '@mantine/core'
import React from 'react'
import { Button } from '../layout/Button'
import { Heading, Text } from '../layout/Typography'
import design from '../../assets/images/landingpage/design.png'
import styled from '@emotion/styled'
import { Page } from '../layout/Page'

export const Banner = () => {
  return (
    <Page bg='linear-gradient(134.89deg, #EBF1FF 14.48%, rgba(244, 247, 255, 0) 87.06%)'>
      <Container maw='1160px' pt='150px'>
        <Flex justify='center' direction='column' align='center'>
          <Heading align='center' maw='926px' mb='24px'>Advance Beyond Traditional Web Design & Development</Heading>
          <Text align='center' maw='624px' mb='40px'>We nurture innovative business ideas by making websites come alive</Text>
          <Flex gap='32px'>
            <Button>Discuss Your Project</Button>
            <Button secondary>See Pricing Plans</Button>
          </Flex>
          <Image src={design.src} alt="design Img" />
        </Flex>
      </Container>
    </Page>

  )
}

const Image = styled.img`
  max-width: 705px;
  margin-top: 63px;
`
