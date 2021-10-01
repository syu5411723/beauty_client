import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import { CategoryData } from '../../../../data/CategoryData'


const CategoryLink = styled(motion.a)`
    width:49.7%;
    height:12vw;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0.4% 0;
    border-radius:5px;
`
const Text = styled.p`
    font-size: 16px;
`

const ContainerV = {
    unhover: {color: '#333', backgroundColor: '#999'},
    hover: {color: '#fff', backgroundColor: '#555', transition: {duration:0.2}},
}

export const PostCategoryItem = () => {

    return (
        <>
        {CategoryData.map((category, index) => (
        <Link href={category.link} key={index}>
        <CategoryLink
            variants={ContainerV}
            initial='unhover'
            whileHover='hover'
        >
            <Text>{category.text}</Text>
        </CategoryLink>
        </Link>
        ))}
        </>
    )
}