import {VFC} from 'react'
import styled from 'styled-components'

type Props = {
    content: string
}
const Wrapper = styled.div`
    margin-bottom: 20px;
`
const Text = styled.p`
    font-size: 16px;
    letter-spacing:1px;
`

export const PostContent:VFC<Props> = ({content}) => {
    return (
        <Wrapper>
            <Text>{content}</Text>
        </Wrapper>
    )
}
