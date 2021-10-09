import styled from "styled-components"
import Image from "next/image"
import { useContext } from "react"

import { SpeechBalloon } from "../../atoms/design/main/post/SpeechBalloon"
import {DataContext} from "../../../pages/posts/[id]"
import { talkRoop } from "../../../lib/for"


type Props = {
    me:boolean,
}

const Wrapper = styled.div<Props>`
    display:flex;
    align-items:center;
    ${({me}) => me ? `
    flex-direction: row-reverse;
    `:`
    `}
`
const ImgWrapper = styled.div<Props>`
    width:55px;
    height:55px;
    position:relative;
    overflow:hidden;
    border-radius:100px;
    ${({me}) => me ? `
    margin-left: 20px;
    ` : `
    margin-right: 20px;
    `}
`

export const Talk = ({me}) => {
    const {postData} = useContext(DataContext)
    return talkRoop(postData[0].talkId, postData[0].talk1, postData[0].talk2, postData[0].talk3, postData[0].talk4, postData[0].talk5, postData[0].talk6)
}
