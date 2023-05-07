import { Container } from '@mantine/core'
import React from 'react'
import { Page } from '../layout/Page'
import { Heading } from '../layout/Typography'

export const Services = () => {
  return (
    <Page bg='linear-gradient(134.89deg, #EBF1FF 14.48%, rgba(244, 247, 255, 0) 87.06%)' pt='160px'>
        <Container maw='1160px'>
            <Heading color='#00164D' size='40px' align='center'>Our Services</Heading>
        </Container>
    </Page>
  )
}


