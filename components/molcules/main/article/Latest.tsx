import styled from "styled-components"
import { LatestContent } from "../../../atoms/main/article/latest/LatestContent"
import { LatestImg } from "../../../atoms/main/article/latest/LatestImg"
import { PostData } from '../../../data/PostData'

const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;

`
const Inner = styled.div`
    display:flex;
    width:100%;
    margin-bottom:30px;
    justify-content:space-between;
`

export const Latest = () => {
    return (
        <Wrapper>
            {PostData.map((data) => (
                <Inner key={data.id}>
                    <LatestImg src={data.img} />
                    <LatestContent content={data.content} />
                </Inner>
            ))}
        </Wrapper>
    )
}
