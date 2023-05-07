import styled from "@emotion/styled";

interface PageProps {
    bg?: string
    pt?: string
    pb?: string
}

export const Page = styled.div<PageProps>`
    background: ${props => props.bg ? props.bg : ''};
    padding-top: ${props => props.pt ? props.pt : ''};
    padding-bottom: ${props => props.pb ? props.pb : ''};
`