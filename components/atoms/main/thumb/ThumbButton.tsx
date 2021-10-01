import styled from "styled-components"
import Link from 'next/link'

const ButtonWrapper = styled.div`
    margin:0 auto;
    height:35%;
    width:60%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:pink;
    border-radius:6px;

`
const Text = styled.p`
    font-size: 16px;
`

export const ThumbButton = () => {
    return (
        <>
        <Link href='/'>
        <ButtonWrapper>
            <Text>記事を読む</Text>
        </ButtonWrapper>
        </Link>
        </>
    )
}