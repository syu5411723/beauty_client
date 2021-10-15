import styled from "styled-components"
import { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-scroll';


const Container = styled.div`
    border:2px solid #E2C9D1;
    border-radius:5px;
    width:80%;
    margin:0 auto calc(1.25rem + ((1vw - 3.5px) * 2.1053));
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
const ContentHide = styled.div`
    cursor: pointer;
    font-size: 11px;
    margin-left: 3px;
    display:flex;
    align-items:center;
`
const Text = styled.li`
    list-style:none;
    margin:15px 0;
    color:#333;
    font-size: calc(0.75rem + ((1vw - 3.5px) * 0.4211));
    cursor:pointer;
`
const HideText = styled.p`
    color: #DB7093;
    border-bottom:1px solid #DB7093;
`
const TextWrapper = styled(motion.ul)`
    padding:0 5%;
    overflow: hidden;
`
const Wrapper = styled.div`
    display:fixed;
    align-items:center;
`
const ListLine = styled.div`
    width:calc(0.625rem + ((1vw - 3.5px) * 0.3158));;
    height:1px;
    background-color: rgba(100, 100, 100, 0.9);
    margin-right: calc(0.3125rem + ((1vw - 3.5px) * 0.5263));;
`
const CrouselV = {
    closed: { height: "0px", transition: { duration: 0.5, ease: [0, 1.09, .59, .94] } },
    open: { height: 'auto', transition: { duration: 0.7, ease: [0, 1.09, .59, .94] } },
}

export const ContentFrame2 = () => {
    const [open, setOpen] = useState(true)
    const handleChange = () => setOpen(!open)
    return (
        <Container>
            <ContentHeader>
                <p>目次</p>
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
                <Text>
                    <Link to="このブログについて" smooth={true} duration={100}>
                        <Wrapper>
                            <ListLine />
                            <p>このブログについて</p>
                        </Wrapper>
                    </Link>
                </Text>
                <Text>
                    <Link to="プロフィール" smooth={true} duration={100}>
                        <Wrapper>
                            <ListLine />
                            <p>プロフィール</p>
                        </Wrapper>
                    </Link>
                </Text>
                <Text>
                    <Link to="お問い合わせ" smooth={true} duration={100}>
                        <Wrapper>
                            <ListLine />
                            <p>お問い合わせ</p>
                        </Wrapper>
                    </Link>
                </Text>
            </TextWrapper>
        </Container>
    )
}
