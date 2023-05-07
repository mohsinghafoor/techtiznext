import styled from "@emotion/styled";

interface ButtonProps {
    secondary?: boolean
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

export const Button = styled.button<ButtonProps>`
    font-family: DM Sans;
    padding: 16px 40px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    background: ${props => props.secondary ? '#fff' : '#032E9B'};
    color: ${props => props.secondary ? '#032E9B' : '#fff'};
    border: ${props => props.secondary ? '1px solid #032E9B' : 'none'};
    margin: ${props => props.m ? props.m : ''};
    margin-bottom: ${props => props.mb ? props.mb : ''};
    margin-left: ${props => props.ml ? props.ml : ''};
    margin-right: ${props => props.mr ? props.mr : ''};
    margin-top: ${props => props.mt ? props.mt : ''};
`