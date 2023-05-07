import React from 'react'
import { Container, Flex , Box} from '@mantine/core'
import { Heading, Text } from '../../layout/Typography'
import ourWork from '../../../assets/images/about-us/our-work.png'
import styled from '@emotion/styled'

export const DoMore = () => {
  return (
    <Container maw='1200px' pt='8.25rem'>
        <Flex gap={40}>
            <Box w={'60%'}>
                <Heading size='32px'>We Do More Than Just Build Software</Heading>
                <CustomText>Techtiz offers more than software development services. With our expertise in software design and development, we also offer cost effective staffing resources, business consulting, and training.</CustomText>
                <CustomText>As a leading software agency, we have a proven track record of successfully helping diverse businesses embark on their transformative journey, with on-time enterprise-level implementation that requires minimal effort.</CustomText>
                <CustomText>Here is what we offer:</CustomText>
            </Box>
            <Flex w='40%' justify={'center'}>
                <Image src={ourWork.src} alt="" />
            </Flex>
        </Flex>
    </Container>
  )
}

const Image = styled.img`
border-radius: 10px;
width: 90%;
`
export const CustomText = styled(Text)`
color:#2e2e2e;
font-size:18px;
line-height:30px; 
margin-top:10px;
`
