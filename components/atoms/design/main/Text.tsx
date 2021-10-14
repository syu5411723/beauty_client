import { VFC } from "react"
import styled from "styled-components"
import { pc } from '../../../Layout/media'

type Props = {
    text: string;
}

export const T = styled.div`
    font-size: calc(0.75rem + ((1vw - 3.5px) * 0.6316));
    margin-bottom: calc(1.875rem + ((1vw - 3.5px) * 2.6316));
    letter-spacing:0.05em;
    &:last-child {
        margin-bottom: 0;
    }
`

export const Text: VFC<Props> = ({ text }) => {
    return (
        <T dangerouslySetInnerHTML={{ __html: text }} />
    )
}
