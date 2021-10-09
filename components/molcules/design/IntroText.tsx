import styled from "styled-components"
import { Text } from "../../atoms/design/main/Text"

const Wrapper = styled.div`
`
const Inner = styled.div`
    padding:20px 0 20px 30px;
`
export const IntroText = ({text1, text2, text3,}) => {
    return (
        <Wrapper>
            <Text text={text1} />
            <Text text={text2} />
            <Text text={text3} />
        </Wrapper>
    )
}
