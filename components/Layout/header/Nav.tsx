import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { pc, sp, tab } from '../media'
import { filterData } from '../../molcules/main/CategoryItem'
import { motion } from 'framer-motion'


const NavWrapper = styled.div`
    width:80%;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;

`
const LinkWrapper = styled(motion.div)`
    display:flex;
    justify-content:center;
    align-items:center;
    width:20%;
    height:100%;
    cursor:pointer;
    color:#fff;
`
const Item = styled.p`
    ${sp`
        font-size: 12px;
    `}
`
const linkV = {
    hidden: {scale: 1},
    visible: {scale: 1.1, transition:{type : 'spring', stiffness: 1000} },
}

export const Nav = () => {
    return (
        <NavWrapper>
            {filterData.map(item => (
                <LinkWrapper
                    key={item.id}
                    variants={linkV}
                    initial='hidden'
                    whileHover='visible'
                >
                    <Link href={`/category/${item.category}`}>
                        <Item>{item.category}</Item>
                    </Link>
                </LinkWrapper>
            ))
            }
        </NavWrapper >
    )
}
