import React from 'react'
import styled from 'styled-components'
import { PostCategory } from '../molcules/main/post/PostCategory'
import { Thumbnail } from '../molcules/main/Thumbnail'
import { Article } from '../organisms/Article'
import { Category } from '../organisms/Category'
import { Post } from '../organisms/Post'
import { ProfileCard } from '../organisms/ProfileCard'

const Container = styled.div`
    width:92%;
    margin:0 auto;
`

export const Main = () => {
    return (
        <>
            <Thumbnail />
            <Container>
            <PostCategory />
            <Post />
            <ProfileCard />
            <Article title='最新記事' />
            <Category />
            </Container>
        </>
    )
}
