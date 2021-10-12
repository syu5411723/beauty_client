import { useContext } from 'react'

import { Head } from "../atoms/design/main/Head"
import { HeadFrame } from "../atoms/design/main/post/HeadFrame"
import { PostText } from "../atoms/design/main/post/PostText"
import { Layout } from "../Layout/Layout"
import { DataContext } from '../../pages/posts/[id]'
import { Talk } from '../molcules/design/Talk'
import { BreadList } from '../Layout/BreadList'
import { Inner } from '../Layout/Inner'
import styled from 'styled-components'
import { TextRoop } from '../molcules/design/TextRoop'

const Container = styled.div`
    box-shadow:0px 0px 5px #c8c8c8, 0px 0px 5px #c8c8c8;
    width:95%;
    margin:calc(0.3125rem + ((1vw - 3.5px) * 0.5263)) auto 0;
`
const ContentInner = styled.div`
    padding:calc(0.9375rem + ((1vw - 3.5px) * 2.6316)) 0;
`

export const PostMain = () => {
    const { postData } = useContext(DataContext)
    return (
        <Layout>
            <Inner>
                <BreadList home={false} category={false} post={true} categoryText={postData[0].category} postText={postData[0].title} />
                <Container>
                    <ContentInner>
                        <HeadFrame />
                        <Talk />
                        {TextRoop()}
                    </ContentInner>
                </Container>
            </Inner>
        </Layout >
    )
}
