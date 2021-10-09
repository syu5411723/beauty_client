import styled from "styled-components"
import { useContext } from "react"

import { DataContext } from "../../../../../pages/posts/[id]"

import { Link as Scroll } from 'react-scroll';

const ContentHeader = styled.div`
    display:flex;
    justify-content:center;
    font-weight:400;
    font-family: 'Quicksand', sans-serif;
    border-bottom:1px solid #E2C9D1;
`
const ContentText = styled.p``
const ContentHide = styled.p``
const Container = styled.div`
    border:2px solid #E2C9D1;
    border-radius:5px;
    width:100%;
    height:100%;
`
const TextWrapper = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 20px 0 20px 25px;
`
const Text = styled.li`
    list-style:none;
    margin-bottom: 15px;
    color:#333;
    &:last-child {
        margin-bottom: 0;
    }
`
export const HeadFrame = () => {
    const { postData } = useContext(DataContext)
    const i = postData[0].frameId
    const result = () => {
        if (i == 3) {
            return (
                <>
                    <Text>
                        <Scroll to={postData[0].head1} smooth={true} duration={100}>
                            {postData[0].fText1}
                        </Scroll>
                    </Text>
                    <Text>
                        <Scroll to={postData[0].head2} smooth={true} duration={100}>
                            {postData[0].fText2}
                        </Scroll>
                    </Text>
                    <Text>
                        <Scroll to={postData[0].head3} smooth={true} duration={100}>
                            {postData[0].fText3}
                        </Scroll>
                    </Text>
                </>
            )
        } if (i === 4) {
            return (
                <>
                    <Text>
                        <Scroll to={postData[0].head1} smooth={true} duration={100}>
                            {postData[0].fText1}
                        </Scroll>
                    </Text>
                    <Text>
                        <Scroll to={postData[0].head2} smooth={true} duration={100}>
                            {postData[0].fText2}
                        </Scroll>
                    </Text>
                    <Text>
                        <Scroll to={postData[0].head3} smooth={true} duration={100}>
                            {postData[0].fText3}
                        </Scroll>
                    </Text>
                    <Text>
                        <Scroll to={postData[0].head4} smooth={true} duration={100}>
                            {postData[0].fText4}
                        </Scroll>
                    </Text>
                </>
            )
        }
    }
    return (
        <Container>
            <ContentHeader>
                <ContentText>目次</ContentText>
                <ContentHide>[hide]</ContentHide>
            </ContentHeader>
            <TextWrapper>
                {result()}
            </TextWrapper>
        </Container>
    )
}
