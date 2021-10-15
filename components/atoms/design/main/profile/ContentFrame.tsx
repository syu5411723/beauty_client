import styled from "styled-components"

const Wrapper = styled.div`
    border:1px solid rgba(0,0,0,0.1);
    border-radius:7px;
    width:90%;
    padding: 20px 0 20px 25px;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
export const Text = styled.div`
    font-size: calc(0.75rem + ((1vw - 3.5px) * 0.6316));
    margin-bottom: calc(0.3125rem + ((1vw - 3.5px) * 0.8421));
    letter-spacing:0.05em;
    &:last-child {
        margin-bottom: 0;
    }
`

export const ContentFrame = () => {
    return (
        <Wrapper>
            <Text>このブログについて</Text>
            <Text>プロフィール</Text>
            {/* <Text></Text> */}
        </Wrapper>
    )
}
