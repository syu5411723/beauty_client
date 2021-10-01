import styled from "styled-components"

const Text = styled.h2`
    padding-top: 5px;
    font-size:20px;
`

export const ThumbnailContent = ({text}) => {
    return (
        <>

            <Text>{text}</Text>

        </>
    )
}