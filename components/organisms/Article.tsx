import styled from 'styled-components'
import { LatestTitlte } from '../atoms/main/article/ArticleTitlte'
import { Latest } from '../molcules/main/article/Latest'

const Container = styled.div`
    border:1px solid;
`
const Inner = styled.div`
    width:95%;
    margin:0 auto;
`

export const Article = ({title}) => {
    return (
        <Container>
            <Inner>
                <LatestTitlte title={title} />
                <Latest />
            </Inner>
        </Container>
    )
}
