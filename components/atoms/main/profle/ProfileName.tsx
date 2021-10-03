import styled from "styled-components"

const Name = styled.p`
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 5px;
    letter-spacing:2px;
    margin-bottom: 4px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 900;
`
const Info = styled.p`
    font-size: 13px;
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
