import { SwiperImg } from "../../atoms/main/swiper/SwiperImg"
import { swiperData } from "../../../lib/data/SwiperData"



export const Swiper = () => {
    return (
        <>
            <>
                <SwiperImg images={swiperData} displacmentImage='/img/displacments/4.png' speed={1.5} />
            </>
        </>
    )
}
