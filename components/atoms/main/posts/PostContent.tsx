import { VFC } from 'react'
import styled from 'styled-components'
import { pc } from '../../../Layout/media'

type Props = {
    title: string,
    home: boolean,
}
type Style = {
    home: boolean,
}
const Wrapper = styled.div<Style>`
    margin: ${({home}) => home ? '15px 0': '4% 3%'} ;
    ${pc`
        margin:20px auto 40px;
    `}
`
const Inner = styled.div`
`
const Text = styled.p`
    font-size: calc(0.6875rem + ((1vw - 3.5px) * 0.5263));
    letter-spacing:1px;

`

export const PostContent: VFC<Props> = ({ home, title }) => {
    return (
        <Wrapper home={home} >
            <Inner>
                <Text>{title}</Text>
            </Inner>
        </Wrapper>
    )
}
