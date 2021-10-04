import styled from "styled-components"
import {VFC} from 'react'

type Props = {
    text: string;
}

const Text = styled.p`
    letter-spacing:1px;
`

export const ProfileBottomText:VFC<Props> = ({text}) => {
    return (
        <>
            <Text>{text}</Text>
        </>
    )
}
