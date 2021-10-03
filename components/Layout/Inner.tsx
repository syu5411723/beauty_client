import styled from "styled-components"

const LayoutInner = styled.div`
    width:92%;
    margin:0 auto;
`

export const Inner = ({children}) => {
    return (
        <LayoutInner>
            {children}
        </LayoutInner>
    )
}
