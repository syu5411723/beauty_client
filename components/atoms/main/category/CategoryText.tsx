import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    category: string,
}
const Text = styled.p`
    font-size: 16px;
`

export const CategoryText: VFC<Props> = ({ category }) => {
    return (
        <>
                <Text>{category}</Text>
        </>
    )
}
