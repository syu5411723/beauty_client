import styled from "styled-components"
import Link from 'next/link'

import { CategoryText } from "../../atoms/main/category/CategoryText"
import { PostData } from '../../../lib/data/PostData'
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)`
    width:30%;
    height:calc(4.6875rem + ((1vw - 3.5px) * 13.1579));
    margin-bottom: 25px;
    display:flex;
    justify-content: center;
    align-items:center;
    border:2px solid #333;
    border-radius:52% 48% 52% 48% / 51% 51% 49% 49%;
    cursor:pointer;
    transition: all 0.1s;
    &:hover {
        color: #fff;
        background-color: #E2C9D1;
        transition: all 0.25s;
    }
`
export const filterData = PostData.filter((element, index, self) =>
    self.findIndex(e =>
        e.category === element.category
    ) === index
)

export const CategoryItem = () => {
    return (
        <>
            {filterData.map(((post, index) => (
                <Link href={`/category/${post.category}`} key={index} scroll={false} >
                    <Wrapper>
                        <CategoryText category={post.category} />
                    </Wrapper>
                </Link>
            )))}
        </>
    )
}
