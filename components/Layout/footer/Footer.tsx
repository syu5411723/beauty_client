import styled from 'styled-components'

import { sp, pc, tab } from '../media'

const Container = styled.footer`
    width: 100%;
    height: 50px;
    text-align: center;
    ${sp`
        margin-top:30px;
        font-size: 13px;
    `}
    ${tab`
        margin-top:50px;
        font-size: 14px;
    `}
    ${pc`
        margin-top:50px;
        font-size: 15px;
    `}
`
const Text = styled.p`
    opacity: 0.7;

`

const Footer = () => {
    return (
        <Container>
            <Text>&copy;&nbsp;&nbsp;2021&nbsp;IT_BEAUTY</Text>
        </Container>
    )
}

export default Footer
