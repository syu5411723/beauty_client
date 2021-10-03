import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    category: string,
}
const Text = styled.div`
    font-size: 20px;
`

export const CategoryText: VFC<Props> = ({ category }) => {
    return (
        <>
                <Text>{category}</Text>
        </>
    )
}
