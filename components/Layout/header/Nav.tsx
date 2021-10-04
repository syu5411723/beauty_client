import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { pc, sp, tab } from '../media'
import { filterData } from '../../molcules/main/CategoryItem'


const NavWrapper = styled.div`
    width:85%;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const LinkWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:25%;
    height:100%;
    cursor:pointer;
    color:#fff;
    position:relative;
    &:hover{
    }
`
const LineWrapper = styled.div`
    width: 1px;
    height: 24px;
    background-color: rgba(255,255,255,0.4);
`
const Item = styled.p`
    ${sp`
        font-size: 12px;
    `}

`

export const Nav = () => {
    return (
        <NavWrapper>
            <LineWrapper />
            {filterData.map(item => (
                    <LinkWrapper key={item.id}>
                        <LineWrapper />
                        <Link href={`/category/${item.category}`} scroll={false}>
                            <Item>{item.category}</Item>
                        </Link>
                        <LineWrapper />
                    </LinkWrapper>
                ))
            }
            <LineWrapper />
        </NavWrapper >
    )
}
