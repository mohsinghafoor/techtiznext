import { Container, Flex } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { TechtizLogo } from '../assets/Logo'
import { Button } from './layout/Button'
import { HeaderLink, headerLinksList } from './mappings/Mapping'
import styled from "@emotion/styled";
import { useRouter } from 'next/router'

interface ActiveProps {
    active: boolean
    color?: string
}

interface HeaderWrapperProps {
    shadow?: string
    bg?: string
}

export const Header = () => {
    const [scroll, setScroll] = React.useState(false)

  //UseEffcet
  React.useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  }, []);

  //Functions

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  return (
    <HeaderWrapper bg={scroll ? '#032E9B' : ''} shadow= {scroll ? '0px 15px 10px -15px rgba(0, 0, 0, 0.3)' : ''}>
        <Flex p={'20px 0px'} w='100%' justify={'space-between'} align='center'>
            <TechtizLogo fill={scroll ? '#fff' : ''}/>
            {headerLinksList.map((item,i) => <HeaderLinks key={i} color={scroll ? '#fff' : ''} name={item.name} link={item.link} />)}
            <Button secondary>Get a Quote</Button>
        </Flex>
    </HeaderWrapper>

  )
}

const HeaderLinks = (props : HeaderLink) => {
    const router = useRouter()
    return (
        <Flex>
            <CustomLink href={props.link} color={props.color} active={router.asPath === props.link ? true : false}>{props.name}</CustomLink>
        </Flex>
    )
}

const CustomLink = styled(Link)<ActiveProps>`
    font-family: DM Sans;
    font-weight: ${props => props.active ? 700 :  400};
    font-size: 16px;
    line-height: 27px;
    color: ${props => props.active ? '#f5c145' : props.color ? props.color : '#032E9B'};
`
const HeaderWrapper = styled(Flex)<HeaderWrapperProps>`
    padding: 0% 9%;
    position: fixed;
    width:100%;
    z-index: 100;
    background: ${props => props.bg ? props.bg : ''};
    box-shadow: ${props => props.shadow ? props.shadow : ''};
`