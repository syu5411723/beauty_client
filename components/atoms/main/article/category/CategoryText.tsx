import { VFC } from 'react'
import Link from 'next/dist/client/link'
import styled from 'styled-components'

type Props = {
    category: string,
    link: string,
}
const Text = styled.div`
    font-size: 20px;
`

export const CategoryText: VFC<Props> = ({ category, link }) => {
    return (
        <>
            <Link href={link}>
                <Text>{category}</Text>
            </Link>
        </>
    )
}
