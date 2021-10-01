import { VFC } from 'react'
import fs from 'fs'
import path from 'path'
import { GetStaticProps, GetStaticPaths } from 'next'

import { Layout } from '../../components/Layout/Layout'
import { PostData } from '../../components/data/PostData'

type PathPramas = {
    id: string
}

type PageProps = {
    post: {}
}
export const getStaticPaths= async () => {
    const paths = PostData.map(post => ({
        params:{
            slug: post.slug,
        }
    }))
    return { paths, fallback: false }
}
export const getStaticProps = async ({params}) => {
    const getPostData = (slug) => {
        return {
            slug,
            ...PostData,
        }
    }
    const post = getPostData(params.slug)
    return {
        props: {
            post
        }
    }
}
const Posts = ({ post }) => {
    return (
        <>
            <Layout>
                <p>{}</p>
            </Layout>
        </>
    )
}

export default Posts
