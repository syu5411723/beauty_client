import styled from "styled-components"
import { useContext } from "react"

import { DataContext } from "../../../pages/posts/[id]"
import { talkRoop } from "../../../lib/for"
import { TalkHead } from "../../atoms/design/main/post/TalkHead"


const Wrapper = styled.div`
    width:90%;
    max-width:600px;
    margin:0 auto;
    box-shadow:0px 0px 5px #c8c8c8, 0px 0px 5px #c8c8c8;
    border-radius:10%;
`
const TalkInner = styled.div`
    padding:5%;
    padding-bottom: calc(1.5625rem + ((1vw - 3.5px) * 4.7368));
`

export const Talk = () => {
    const { postData } = useContext(DataContext)
    return (
        <>
            <TalkHead text1={postData[0].talkTop1} text2={postData[0].talkTop2} />
            <Wrapper>
                <TalkInner>
                    {talkRoop(postData[0].talkId, postData[0].talk1, postData[0].talk2, postData[0].talk3, postData[0].talk4, postData[0].talk5, postData[0].talk6)}
                </TalkInner>
            </Wrapper>
            <TalkHead text1={postData[0].talkBottom1} text2={postData[0].talkBottom2} />
        </>
    )
}
