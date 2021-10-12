import styled from "styled-components"
import { result } from "../../../../../lib/for"

const TextWapper = styled.div`
    margin:0 auto;
    padding:25px 5% 5px;
`

export const PostText = ({t1, t2, t3, t4, t5, t6, t7, t8, t9}) => {

    return (
        <TextWapper>
            {result(t1, t2, t3, t4, t5, t6, t7, t8, t9)}
        </TextWapper>
    )
}