import styled from "styled-components"
import Link from 'next/link'

import { filterData } from "../../../molcules/main/CategoryItem"

const Wrapper = styled.div`
    width:100%;
`
const Inner = styled.ul`
    padding:5%;
`
const Item = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 12px;
    width:60%;
`
const Icon = styled.div`
    font-size:20px;
    color: rgba(120, 120, 120,0.7);
    margin-right: 10px;
`
const Text = styled.p``

export const SideCategoryList = () => {
    return (
        <Wrapper>
            <Inner>
                {filterData.map(post => (
                    <Link key={post.id} href={`/category/${post.category}`}>
                        <Item>
                            <Icon>&gt;</Icon>
                            <Text>{post.category}</Text>
                        </Item>
                    </Link>
                ))}
            </Inner>
        </Wrapper>
    )
}
