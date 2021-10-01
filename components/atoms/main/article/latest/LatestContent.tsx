import { VFC } from "react"
import styled from "styled-components"

type Props = {
    content:string
}

const Wrapper = styled.div`
    width:55%;
`

const Text = styled.p`

`

export const LatestContent:VFC<Props> = ({content}) => {
    return (
        <Wrapper>
            <Text>{content}</Text>
        </Wrapper>
    )
}
