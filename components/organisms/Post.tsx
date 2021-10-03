import React, { VFC } from 'react'
import styled from 'styled-components'
import { Button } from '../Layout/Button'
import { SectionTitle } from '../Layout/SectionTitlte'
import { PostItem } from '../molcules/main/post/PostItem'

type Props = {
    data: any,
    title: string,
    title2: string,
    flex: any,
}

type flex = {
    flex: boolean,
}

const PostContainer = styled.div<flex>`
    display:${({flex}) => flex ? 'flex' : 'block' };
    justify-content:space-between;
    flex-wrap:wrap;
`

export const Post: VFC<Props>= ({ data, title, title2, flex }) => {
    return (
        <>
            <SectionTitle title={title} title2={title2} />
            <PostContainer flex={flex}>
                <PostItem data={data} flex={flex} />
            </PostContainer>
            <Button />
        </>
    )
}
