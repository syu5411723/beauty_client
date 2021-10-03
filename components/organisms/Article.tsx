import styled from 'styled-components'
import { VFC } from 'react'


import { ArticleItem } from '../molcules/main/article/ArticlItem'
import { SectionTitle } from '../Layout/SectionTitlte'

type Props = {
    title: string,
    title2: string,
    data: {},
    category: boolean,
}

const Container = styled.div`
    margin-top: 200px;
    border-radius: 20px;

`
const Inner = styled.div`
    width:95%;
    margin:0 auto;
`

export const Article: VFC<Props> = ({ title, data, title2 }) => {
    return (
        <Container>
            <Inner>
                <SectionTitle title={title} title2={title2} />
                <ArticleItem data={data} />
            </Inner>
        </Container>
    )
}
