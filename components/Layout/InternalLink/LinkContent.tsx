import styled from "styled-components"
import Image from 'next/image'

const Wrapper = styled.div`
`
const Inner = styled.div`
    padding:10px;
    display:flex;
    border:1px solid rgba(200, 200, 200, 1);
    border-radius:2%;
`
const ImgWrapper = styled.div`
    position:relative;
    width:calc(4.6875rem + ((1vw - 3.5px) * 7.8947));
    height:calc(3.75rem + ((1vw - 3.5px) * 7.8947));
`
const TextWrapper = styled.div`
    margin-left: calc(0.625rem + ((1vw - 3.5px) * 1.0526));
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const Text = styled.p`
    font-size:calc(0.75rem + ((1vw - 3.5px) * 0.6316));
`
const MoreButton = styled.div`
    font-size:calc(0.625rem + ((1vw - 3.5px) * 0.2105));
    font-weight:100;
    background-color: #FEFFE0;
    border-radius:2%;
    border:1px solid rgba(200, 200, 200, 1);;
    display: flex;
    align-items: center;
    justify-content: center;
    width:calc(4.5rem + ((1vw - 3.5px) * 1.8947));
    height:calc(1.4375rem + ((1vw - 3.5px) * 1.7895));
`
const ButtonText = styled.p`

`

export const LinkContent = ({ img, contentText }) => {
    return (
        <Wrapper>
            <Inner>
                <ImgWrapper>
                    <Image src={img} layout="fill" objectFit="cover" />
                </ImgWrapper>
                <TextWrapper>
                    <Text>{contentText}</Text>
                    <MoreButton><ButtonText>続きを見る</ButtonText></MoreButton>
                </TextWrapper>
            </Inner>
        </Wrapper>
    )
}
