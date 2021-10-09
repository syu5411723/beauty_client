import styled from "styled-components"

type Props = {
    head: string,
}
type HeaderLink = {
    name: string,
}

const Wrapper = styled.a<HeaderLink>`
    display:flex;
    align-items:center;
`
const Tab = styled.div`
    width:5px;
    height: 50px;
    border-radius:5px;
    background-color: #E2C9D1;
`
const Text = styled.h2`
    font-weight: 300;
`

export const Head = ({head, HeadLink}) => {
    return (
        <>
            <Wrapper name={HeadLink} >
                <Tab />
                <Text>{head}</Text>
            </Wrapper>
        </>
    )
}
