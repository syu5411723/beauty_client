import { VFC } from 'react'
import styled from 'styled-components'

type Props = {
    category: string,
}
const Text = styled.p`
    font-size:  calc(0.8125rem + ((1vw - 3.5px) * 0.7368));
`

export const CategoryText: VFC<Props> = ({ category }) => {
    return (
        <>
                <Text>{category}</Text>
        </>
    )
}
