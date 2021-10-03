import Link from 'next/link'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { HomeDataContext } from '../../../../pages/Home'


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

export const PostCategoryItem = () => {
    const {PostData} = useContext(HomeDataContext)
    return (
        <>
        {PostData.map(post => (
        <Link href={post.link} key={post.id}>
        <CategoryLink
        >
            <Text>{post.category}</Text>
        </CategoryLink>
        </Link>
        ))}
        </>
    )
}