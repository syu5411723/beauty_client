import { VFC } from "react"
import styled from "styled-components"
import { Text } from "../Text"

type Props = {
    text1: string,
    text2: string,
}

const Wrapper = styled.div`
    width:85%;
    margin:24px auto calc(1.25rem + ((1vw - 3.5px) * 4.2105));
`
export const TalkHead:VFC<Props> = ({text1, text2}) => {
    return (
        <Wrapper>
            <Text text={text1} />
            <Text text={text2} />
        </Wrapper>
    )
}
