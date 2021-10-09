import { VFC } from "react"
import styled from "styled-components"

type Props = {
    text: string;
}

const T = styled.div`
    font-size: 14px;
    margin-bottom:20px;
    letter-spacing:0.05em;
    &:last-child {
        margin-bottom: 0;
    }
`

export const Text:VFC<Props> = ({text}) => {
    return (
        <T dangerouslySetInnerHTML={{__html: text }} />
    )
}
