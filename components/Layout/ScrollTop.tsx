import styled from "styled-components"
import "scroll-behavior-polyfill"


const Wrapper = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius:50%;
    opacity: 0.8;
    border: 2px solid #E2C9D1;
    background-color: #E2C9D1;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #fff;
        transition: all 0.1s;
    }

`
const Arrow1 = styled.div`
    position: absolute;
    background-color: #fff;
    width:11%;
    height: 35%;
    border-radius:10px;
    transform: translate(305%, 60%) rotate(50deg);
    transition: all 0.3s;
    ${Wrapper}:hover & {
        background-color: #E2C9D1;
        transition: all 0.1s;
    }
`
const Arrow2 = styled.div`
    position: absolute;
    background-color: #fff;
    width:11%;
    height: 35%;
    border-radius:10px;
    transform: translate(505%, 65%) rotate(310deg);
    transition: all 0.3s;
    ${Wrapper}:hover & {
        background-color: #E2C9D1;
        transition: all 0.1s;
    }
`
const ArrowLine = styled.div`
    position:absolute;
    background-color: #fff;
    width:10%;
    height: 55%;
    top: 25%;
    left: 50%;
    border-radius:10px;
    transform: translateX(-50%);
    transition: all 0.3s;
    ${Wrapper}:hover & {
        background-color: #E2C9D1;
    }
`

export const ScrollTop = () => {
    const returnTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <Wrapper onClick={returnTop}>
                <Arrow1 />
                <ArrowLine />
                <Arrow2 />
            </Wrapper>
        </>
    )
}
