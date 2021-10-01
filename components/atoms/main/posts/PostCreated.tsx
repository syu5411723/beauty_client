import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    created: string
}

const Wrapper = styled.div`
    text-align:right;
    margin-right: 5px;
`

const Text = styled.p`
    opacity:0.7;
    font-size: 13px;
`

export const PostCreated: VFC<Props> = ({ created }) => {
    return (
        <Wrapper>
            <Text>
                {created}
            </Text>
        </Wrapper>
    )
}
