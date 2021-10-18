import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    margin-bottom: calc(0.625rem + ((1vw - 3.5px) * 1.0526));
`
const Related = styled.div`
    background-color: #F57B01;
    width:55px;
    height: calc(1.125rem + ((1vw - 3.5px) * 1.2632));
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: calc(0.5rem + ((1vw - 3.5px) * 1.2632));
`
const Text = styled.p`
    font-size: 11px;
    color: #FFFFFF;

`
const A = styled.a`

`

export const RelatedLink = ({ linkText }) => {
    return (
        <Wrapper>
            <Related><Text>関連記事</Text></Related>
            <A className="link">{linkText}</A>
        </Wrapper>
    )
}