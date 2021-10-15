import styled from 'styled-components'
import Link from 'next/link'
import { pc, sp, tab } from '../media'

const Title = styled.h1`
    ${sp`
        font-size: 4vw;
        font-size: calc(1.125rem + ((1vw - 3.5px) * 1.6));
    `}
    ${tab`
        font-size: calc(1.375rem + ((1vw - 6px) * 0.7092));    `}
    ${pc`
        font-size: 26px;
    `}
    cursor: pointer;
    letter-spacing:2px;
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 400;
`
export const HeaderTitle = () => {
    return (
        <Link href='/' scroll={false}>
            <Title>IT美容師のすすめ</Title>
        </Link>
    )
}
