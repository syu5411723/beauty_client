import styled from "styled-components"
import Image from "next/image"

const Container = styled.div`
    /* position: absolute;
    z-index: 2;
    opacity: 0.2; */
`
const Wave = styled.div`
    width:100vw;
    height:30vw;
    transform: translateX(-4vw);
    position: relative;
`

export const Bg = ({ img }) => {
    return (
        <Container>
            <Wave>
                <Image src={img} layout="fill" objectFit='cover' />
            </Wave>
        </Container>
    )
}
