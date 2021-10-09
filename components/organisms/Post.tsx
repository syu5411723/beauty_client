import React, { VFC } from 'react'
import styled from 'styled-components'
import { Bg } from '../Layout/main/Bg'
import { Button } from '../Layout/main/Button'
import { SectionTitle } from '../Layout/main/SectionTitlte'
import { PostItem } from '../molcules/main/PostItem'

type Props = {
    data: any,
    title: string,
    title2: string,
    flex: any,
}
type flex = {
    flex: boolean,
}
const Container = styled.div`
    position: relative;
`
const BgConteiner = styled.div`
    background-color: #f7f6fb;
    width: 100vw;
    transform: translateX(-4vw);
    padding: 10vw 0;
`
const ItenWRapper = styled.div<flex>`
    display:${({ flex }) => flex ? 'flex' : 'block'};
    justify-content:space-between;
    flex-wrap:wrap;
    width:92%;
    margin:0 auto;
`

export const Post: VFC<Props> = ({ data, title, title2, flex }) => {
    return (
        <Container>
            <Bg img="/img/wave-1.png" />
            <BgConteiner>
                <SectionTitle title={title} title2={title2} />
                <ItenWRapper flex={flex}>
                    <PostItem data={data} flex={flex} />
                </ItenWRapper>
                <Button link="/ " text='more' />
            </BgConteiner>
            <Bg img='/img/wave-2.png' />
        </Container>
    )
}
