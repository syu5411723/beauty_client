import { VFC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

type Props = {
    img: string
}

const ImgWrapper = styled(motion.div)`
    width:98%;
    height: 10vw;
    position: relative;
`

const imgV = {
    hidden: { opacity: 0, y: '50px' },
    visible: { opacity: 1, y: '0px', transition:{duration:0.3} },
}

export const PostImg: VFC<Props> = ({ img }) => {
    const [ref, inView] = useInView({
        rootMargin: '-100px 0px',
        triggerOnce: true,
    })
    return (
            <ImgWrapper
                ref={ref}
                variants={imgV}
                animate={inView ? 'visible' : 'hidden' }
            >
                <Image src={img} layout='fill' objectFit='cover' />
            </ImgWrapper>
    )
}
