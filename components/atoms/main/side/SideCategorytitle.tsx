import styled from "styled-components"

const Wrapper = styled.div`
    width:100%;
    background-color: #E2C9D1;
`
const Inner = styled.div`
    padding: 10px 5px;
    display:flex;
    margin: 0 auto;
`
const Icon = styled.div`
    margin-right:10px;
`
const Text = styled.p`
    font-size: 16px;
`

export const SideCategoryTitle = () => {
    return (
        <Wrapper>
            <Inner>
                <Icon></Icon>
                <Text>カテゴリー</Text>
            </Inner>
        </Wrapper>
    )
}
