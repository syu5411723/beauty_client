import styled from "styled-components"
import { Head } from "../Head"
import { useContext } from "react"
import {DataContext} from '../../../../../pages/posts/[id]'

type Style = {
    bgc: boolean,
}
const Container = styled.div`

`
const Wrapper = styled.div<Style>`
    width:85%;
    padding:15px 10px 10px;
    margin:0 auto;
    border-radius:2%;
    margin-bottom:calc(2.1875rem + ((1vw - 3.5px) * 3.1579));
    background-color: ${({ bgc }) => bgc ? 'rgba(200, 0, 0, 0.4)' : 'rgba(0,0,200,0.4)'};
`
const Inner = styled.ul`
    padding:2%;
`
const Name = styled.h3`
    width:92%;
    margin:15px auto;
    line-height:170%;
    font-size: calc(0.8125rem + ((1vw - 3.5px) * 0.5263));
    font-weight: 400;
`
const Title = styled.p`
    width:80%;
    margin:0px auto 10px;
    font-size: calc(0.875rem + ((1vw - 3.5px) * 0.6316));
`
const Text = styled.li`
    margin-left: 3%;
    font-size: calc(0.6875rem + ((1vw - 3.5px) * 0.5263));
    margin-bottom: 5px;
`
const BottomText = styled.div`
    width:92%;
    margin:15px auto;
    line-height:170%;
    font-size: calc(0.8125rem + ((1vw - 3.5px) * 0.5263));
`



export const Merittlo = () => {
    const {postData} = useContext(DataContext)
    const mId1 = postData[0].merittoId1
    const mId2 = postData[0].merittoId2
    const dId1 = postData[0].demerittoId1
    const dId2 = postData[0].demerittoId2
    return (
        <Container>
            <Inner>
                <Name>{postData[0].first}</Name>
                <Title>メリット</Title>
                <Wrapper bgc={true} >
                    {mId1 == 2 && (
                        <>
                            <Text>{postData[0].meritto1_1}</Text>
                            <Text>{postData[0].meritto1_2}</Text>
                        </>
                    )}
                    {mId1 == 3 && (
                        <>
                            <Text>{postData[0].meritto1_1}</Text>
                            <Text>{postData[0].meritto1_2}</Text>
                            <Text>{postData[0].meritto1_3}</Text>
                        </>
                    )}
                </Wrapper>
                <Title>デメリット</Title>
                <Wrapper bgc={false} >
                    {dId1 == 2 && (
                        <>
                            <Text>{postData[0].demeritto1_1}</Text>
                            <Text>{postData[0].demeritto1_2}</Text>
                        </>
                    )}
                    {dId1 == 3 && (
                        <>
                            <Text>{postData[0].demeritto1_1}</Text>
                            <Text>{postData[0].demeritto1_2}</Text>
                            <Text>{postData[0].demeritto1_3}</Text>
                        </>
                    )}
                </Wrapper>
            </Inner>
            <Inner>
                <Name>{postData[0].second}</Name>
                <Title>メリット</Title>
                <Wrapper bgc={true} >
                    {mId1 == 2 && (
                        <>
                            <Text>{postData[0].meritto2_1}</Text>
                            <Text>{postData[0].meritto2_2}</Text>
                        </>
                    )}
                    {mId1 == 3 && (
                        <>
                            <Text>{postData[0].meritto2_1}</Text>
                            <Text>{postData[0].meritto2_2}</Text>
                            <Text>{postData[0].meritto2_3}</Text>
                        </>
                    )}
                </Wrapper>
                <Title>デメリット</Title>
                <Wrapper bgc={false} >
                    {dId1 == 2 && (
                        <>
                            <Text>{postData[0].demeritto2_1}</Text>
                            <Text>{postData[0].demeritto2_2}</Text>
                        </>
                    )}
                    {dId1 == 3 && (
                        <>
                            <Text>{postData[0].demeritto2_1}</Text>
                            <Text>{postData[0].demeritto2_2}</Text>
                            <Text>{postData[0].demeritto2_3}</Text>
                        </>
                    )}
                </Wrapper>
                <BottomText dangerouslySetInnerHTML={{ __html: postData[0].merittoBottom }} />
            </Inner>
        </Container>
    )
}
