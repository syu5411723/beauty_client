import {useContext} from 'react'

import { DataContext } from '../../../pages/posts/[id]'
import { PostImg } from '../../atoms/design/main/post/PostImg'
import { PostTitle } from '../../atoms/design/main/post/PostTitle'

export const PostHead = () => {
    const {postData} = useContext(DataContext)

    return (
        <>
            <PostTitle text={postData[0].title} />
            <PostImg src={postData[0].img} />
        </>
    )
}
