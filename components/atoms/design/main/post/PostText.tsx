import styled from "styled-components"
import { Result } from "../../../../../lib/for"

const TextWapper = styled.div`
    margin:0 auto;
    padding:25px 5% 5px;
`

export const PostText = ({t1, t2, t3, t4, t5, t6, t7, t8, t9, isLink,  linkText, link, headText, img, contentText }) => {

    return (
        <TextWapper>
            <Result t1={t1} t2={t2} t3={t3} t4={t4} t5={t5} t6={t6} t7={t7} t8={t8} t9={t9} isLink={isLink} linkText={linkText} link={link} headText={headText} img={img} contentText={contentText}/>
            {/* {result(t1, t2, t3, t4, t5, t6, t7, t8, t9, isLink,  linkText, link, headText, img, contentText )} */}
        </TextWapper>
    )
}