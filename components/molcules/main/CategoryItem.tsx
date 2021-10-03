import styled from "styled-components"
import Link from 'next/link'

import { CategoryText } from "../../atoms/main/category/CategoryText"
import { PostData } from '../../data/PostData'
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
    width:40vw;
    height:30vw;
    margin-bottom: 30px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:2px solid;
    border-radius:52% 48% 52% 48% / 51% 51% 49% 49%;
    cursor:pointer;
`
const wrapperV = {
    hidden: {backgroundColor: '#fff'},
    visible: {backgroundColor: '#E2C9D1', transition: {duration:0.2}},
    exit: {transition: {duration:0}}
}

export const filterData = PostData.filter((element, index, self) =>
    self.findIndex(e =>
        e.category === element.category
    ) === index
)

export const CategoryItem = () => {
    return (
        <>
            {filterData.map(((post, index) => (
                <Link href={`/category/${post.category}`} key={index} >
                    <Wrapper
                        variants={wrapperV}
                        initial='hidden'
                        whileHover='visible'
                        exit='exit'
                    >
                        <CategoryText category={post.category} />
                    </Wrapper>
                </Link>
            )))}
        </>
    )
}
