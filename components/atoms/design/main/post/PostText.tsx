import styled from "styled-components"
import { useContext } from 'react'
import { DataContext } from '../../../../../pages/posts/[id]'
// import { Text } from "../Text"
import { result } from "../../../../../lib/for"

const TextWapper = styled.div``
export const PostText = () => {
    const { postData } = useContext(DataContext)
    return (
        <TextWapper>
            {result(postData[0].textId, postData[0].text1, postData[0].text2, postData[0].text3, postData[0].text4, postData[0].text5, postData[0].text6, postData[0].text7, postData[0].text8, postData[0].text9)}
        </TextWapper>
    )
}