import styled from "styled-components"
import Image from "next/image"

const Wave = styled.div`
    width:100vw;
    height:30vw;
    position: relative;
`

export const Bg = ({ img }) => {
    return (
        <>
            <Wave>
                <Image src={img} layout="fill" objectFit='cover' />
            </Wave>
        </>
    )
}
