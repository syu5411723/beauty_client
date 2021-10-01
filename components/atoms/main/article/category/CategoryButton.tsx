import styled from "styled-components"

const ButtonWrapper = styled.div`
    margin:0 10px;
`

const Button = styled.div`
    border-radius: 100%;
    background-color: pink;
    width:20px;
    height: 20px;
    position:relative;
`
const TopArrow = styled.div`
    position:absolute;
    background-color: #fff;
    height: 2px;
    width: 10px;
    border-radius:10px;
    transform: rotate(35deg) translate(9px, 2px);
`
const BottomArrow = styled.div`
    position:absolute;
    background-color: #fff;
    height: 2px;
    width: 10px;
    border-radius:10px;
    transform: rotate(-35deg) translate(-2px,13px);
`
export const CategoryButton = () => {
    return (
        <ButtonWrapper>
            <Button>
                <TopArrow />
                <BottomArrow />
            </Button>
        </ButtonWrapper>
    )
}
