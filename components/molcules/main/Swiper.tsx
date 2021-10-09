import styled from "styled-components"
import { SwiperImg } from "../../atoms/main/swiper/SwiperImg"
import { swiperData } from "../../../lib/data/SwiperData"

const SwiperWrapper = styled.div`
    transform:translateX(-4vw);
`


export const Swiper = () => {
    return (
        <>
            <SwiperWrapper>
                <SwiperImg images={swiperData} displacmentImage='/img/displacments/4.png' speed={1.5} />
            </SwiperWrapper>
        </>
    )
}
