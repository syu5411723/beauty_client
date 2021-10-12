import styled from "styled-components"
import { useContext, useState } from "react"
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { useEffect } from "react";


import { DataContext } from "../../../../../pages/posts/[id]"

const Container = styled.div`
    border:2px solid #E2C9D1;
    border-radius:5px;
    width:78%;
    margin:0 auto 20px;
`
const ContentHeader = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:400;
    font-family: 'Quicksand', sans-serif;
    border-bottom:1px solid #E2C9D1;
    padding: calc(0.3125rem + ((1vw - 3.5px) * 0.7368));
    font-size: calc(0.875rem + ((1vw - 3.5px) * 0.6316));
`
const ContentText = styled.p`

`
const ContentHide = styled.div`
    cursor: pointer;
    font-size: 11px;
    margin-left: 3px;
    display:flex;
    align-items:center;
`
const HideText = styled.p`
    color: #DB7093;
    border-bottom:1px solid #DB7093;
`
const TextWrapper = styled(motion.ul)`
    padding:0 15px;
    font-size: calc(0.8125rem + ((1vw - 3.5px) * 0.5263));
    overflow: hidden;
`
const Text = styled.li`
    list-style:none;
    margin:15px 0;
    color:#333;
`
const CrouselV = {
    closed: { height: "0px", transition: { duration: 0.5, ease: [0, 1.09, .59, .94] } },
    open: { height: 'auto', transition: { duration: 0.7, ease: [0, 1.09, .59, .94] } },
}
export const HeadFrame = () => {
    const [open, setOpen] = useState(true)
    const handleChange = () => setOpen(!open)
    // const result = () => {
    // if (i == 3) {
    //     return (
    //         <>
    //             <Text>
    //                 <Scroll to={postData[0].head1} smooth={true} duration={100}>
    //                     {postData[0].fText1}
    //                 </Scroll>
    //             </Text>
    //             <Text>
    //                 <Scroll to={postData[0].head2} smooth={true} duration={100}>
    //                     {postData[0].fText2}
    //                 </Scroll>
    //             </Text>
    //             <Text>
    //                 <Scroll to={postData[0].head3} smooth={true} duration={100}>
    //                     {postData[0].fText3}
    //                 </Scroll>
    //             </Text>
    //         </>
    //     )
    // } if (i === 4) {
    //     return (
    //         <>
    //             <Text>
    //                 <Scroll to={postData[0].head1} smooth={true} duration={100}>
    //                     {postData[0].fText1}
    //                 </Scroll>
    //             </Text>
    //             <Text>
    //                 <Scroll to={postData[0].head2} smooth={true} duration={100}>
    //                     {postData[0].fText2}
    //                 </Scroll>
    //             </Text>
    //             <Text>
    //                 <Scroll to={postData[0].head3} smooth={true} duration={100}>
    //                     {postData[0].fText3}
    //                 </Scroll>
    //             </Text>
    //             <Text>
    //                 <Scroll to={postData[0].head4} smooth={true} duration={100}>
    //                     {postData[0].fText4}
    //                 </Scroll>
    //             </Text>
    //         </>
    //     )
    // }
    // }
    return (
        <Container>
            <ContentHeader>
                <ContentText>目次</ContentText>
                <ContentHide onClick={handleChange}>
                    &#91;
                    {open ? (
                        <>
                        <HideText>閉じる</HideText>
                        </>
                    ) : (
                        <>
                            <HideText>開ける</HideText>
                        </>
                    )}
                    &#93;
                </ContentHide>
            </ContentHeader>
            <TextWrapper
                variants={CrouselV}
                animate={open ? 'open' : 'closed'}
            >
                <Result />
            </TextWrapper>
        </Container>
    )
}

const Result = () => {
    const { postData } = useContext(DataContext)
    const i = postData[0].frameId
    useEffect(() => {
        const frame = document.getElementById('frame__list')
        if(i == 3){
            // frame.removeChild(frame.children[4])
            frame.removeChild(frame.children[3])
        }
        if (i == 4) {
            frame.removeChild(frame.children[4])
        }
    },[])
    return (
        <div id='frame__list'>
            <Text>
                <Link to={postData[0].head1} smooth={true} duration={100}>
                    {postData[0].fText1}
                </Link>
            </Text>
            <Text>
                <Link to={postData[0].head2} smooth={true} duration={100}>
                    {postData[0].fText2}
                </Link>
            </Text>
            <Text>
                <Link to={postData[0].head3} smooth={true} duration={100}>
                    {postData[0].fText3}
                </Link>
            </Text>
            <Text>
                <Link to={postData[0].head4} smooth={true} duration={100}>
                    {postData[0].fText4}
                </Link>
            </Text>
            <Text>
                <Link to={postData[0].head5} smooth={true} duration={100}>
                    {postData[0].fText5}
                </Link>
            </Text>
        </div>
    )
}
