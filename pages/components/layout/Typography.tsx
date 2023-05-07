
import styled from "@emotion/styled";

interface TypographyProps {
    height?: string
    color?: string
    size?: string
    align?: string
    maw?: string
    m?: string
    mb?: string
    mt?: string
    ml?: string
    mr?: string
}


export const Heading = styled.div<TypographyProps>`
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.size ? props.size : '48px'};
    line-height: ${props => props.height ? props.height : '60px'};
    color: ${props => props.color ? props.color : '#032E9B'};
    text-align: ${props => props.align ? props.align : 'left'};
    max-width: ${props => props.maw ? props.maw : ''};
    margin: ${props => props.m ? props.m : ''};
    margin-bottom: ${props => props.mb ? props.mb : ''};
    margin-left: ${props => props.ml ? props.ml : ''};
    margin-right: ${props => props.mr ? props.mr : ''};
    margin-top: ${props => props.mt ? props.mt : ''};
`
export const Text = styled.div<TypographyProps>`
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.size ? props.size : '24px'};;
    line-height: 36px;
    color: ${props =>props.color ? props.color: '#032E9B'};
    text-align: ${props => props.align ? props.align : 'left'};
    max-width: ${props => props.maw ? props.maw : ''};
    margin: ${props => props.m ? props.m : ''};
    margin-bottom: ${props => props.mb ? props.mb : ''};
    margin-left: ${props => props.ml ? props.ml : ''};
    margin-right: ${props => props.mr ? props.mr : ''};
    margin-top: ${props => props.mt ? props.mt : ''};
`