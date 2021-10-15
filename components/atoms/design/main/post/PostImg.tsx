import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:90%;
    height:calc(10.9375rem + ((1vw - 3.5px) * 33.1579));
    position:relative;
    margin:calc(1.25rem + ((1vw - 3.5px) * 3.1579)) auto;
`

export const PostImg = ({src}) => {
    return (
        <Wrapper>
            <Image src={src} layout="fill" objectFit="cover" ></Image>
        </Wrapper>
    )
}
