import styled from "styled-components"

const Name = styled.p`
    margin-top: 15px;
    font-size: calc(1rem + ((1vw - 3.5px) * 0.4211));
    margin-bottom: 5px;
    letter-spacing:2px;
    margin-bottom: 4px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 900;
`
const Info = styled.p`
    font-size: calc(0.6875rem + ((1vw - 3.5px) * 0.3158));
    opacity:0.6;
    letter-spacing:2px;
`

export const ProfileName = () => {
    return (
        <>
        <Name>Hiragi Syu</Name>
        <Info>IT美容師</Info>
        </>
    )
}
