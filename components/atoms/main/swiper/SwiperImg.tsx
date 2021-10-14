import { useDistortionEffectCarousel } from "distortion-effect-carousel"
import { useEffect, VFC } from "react";
import styled from "styled-components";
import Link from 'next/link'

import { SwiperArrow } from "./SwiperArrow";

const SwiperWrapper = styled.div`
    width:100vw;
    height: 40vw;
    border: 1px solid rgba(0,0,0,0.4) ;
    position: relative;
`
const Swiper = styled.div`
    width:100%;
    height: 100%;
`
type Props = {
    images: string[]
    displacmentImage: string
    speed: number
}


export const SwiperImg: VFC<Props> = ({ images, displacmentImage, speed }) => {
    const { ref, next, prev, } = useDistortionEffectCarousel({ images, displacmentImage, speed });
    useEffect(() => {
        const timer = setTimeout(() => {
            next();
        }, 5000)
        return () => clearTimeout(timer);
    })
    return (
        <>
            <SwiperWrapper>
                <Swiper ref={ref} />
                    <SwiperArrow right={false} click={prev} />
                    <SwiperArrow right={true} click={next} />
            </SwiperWrapper>
        </>
    )
}
