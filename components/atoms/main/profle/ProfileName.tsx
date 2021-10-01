import styled from "styled-components"

const Name = styled.p`
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 5px;
    letter-spacing:2px;
    margin-bottom: 2px;
`
const Info = styled.p`
    font-size: 13px;
    opacity:0.6;
    letter-spacing:2px;
`

export const ProfileName = () => {
    return (
        <>
        <Name>柊希</Name>
        <Info>IT美容師</Info>
        </>
    )
}
