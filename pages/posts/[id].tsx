import { VFC } from 'react'
import fs from 'fs'
import path from 'path'
import { GetStaticProps, GetStaticPaths } from 'next'

import { Layout } from '../../components/Layout/Layout'
import { PostData } from '../../components/data/PostData'
import { Post } from '../../components/organisms/Post'

type PathPramas = {
    id: string
}

type PageProps = {
    post: {}
}
export const getStaticPaths= async () => {
    const paths = PostData.map(post => ({
        params:{
            id: post.id,
        }
    }))
    return { paths, fallback: false }
}
export const getStaticProps = async ({params}) => {
    const getPostData = (id) => {
        return {
            id,
        }
    }
    const post = getPostData(params.id)
    return {
        props: {
            post
        }
    }
}
const Posts = ({ post }) => {
    console.log(post.id)
    return (
        <>
            <Layout>
                {PostData[`${post.id}`].slug}
                {post.id}
            </Layout>
        </>
    )
}

export default Posts
