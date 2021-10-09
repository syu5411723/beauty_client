import { useContext } from 'react'

import { Head } from "../atoms/design/main/Head"
import { HeadFrame } from "../atoms/design/main/post/HeadFrame"
import { PostText } from "../atoms/design/main/post/PostText"
import { Layout } from "../Layout/Layout"
import { DataContext } from '../../pages/posts/[id]'
import { Talk } from '../molcules/design/Talk'
import { BreadList } from '../Layout/BreadList'


export const PostMain = () => {
    const { postData } = useContext(DataContext)
    return (
        <Layout>
            <BreadList home={false} category={false} post={true} categoryText={postData[0].category} postText={postData[0].title} />
            <HeadFrame />
            <Talk me={false} />
            <Head head={postData[0].head1} HeadLink={postData[0].head1} />
            <PostText />
        </Layout>
    )
}
