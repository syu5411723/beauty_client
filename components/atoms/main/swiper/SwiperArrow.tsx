import styled from 'styled-components'
import { VFC } from 'react'
type Props = {
    right: boolean,
}
const ArrowWrapper = styled.div<Props>`
    padding:15px;
    position: absolute;
    top: 50%;
    left: ${({ right }) => right ? '92.5%' : '7.5%'};
    transform: translate(-50%, -50%);
    cursor: pointer;
`
const Arrow = styled.div`
font-size: calc(2rem + ((1vw - 3.5px) * 5.0));
    opacity: 0.8;
`
export const SwiperArrow = ({ right, click }) => {
    return (
        <>
            <ArrowWrapper onClick={click} right={right}>
                <Arrow>
                    {right ? '>' : '<'}
                </Arrow>
            </ArrowWrapper>
        </>
    )
}
