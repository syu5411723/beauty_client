import React, { VFC } from 'react'
import styled from 'styled-components'
import { Bg } from '../Layout/main/Bg'
import { Button } from '../Layout/main/Button'
import { SectionTitle } from '../Layout/main/SectionTitlte'
import { sp } from '../Layout/media'
import { PostItem } from '../molcules/main/PostItem'

type Props = {
    data: any,
    title: string,
    title2: string,
    flex: any,
    home: boolean;
}
type flex = {
    flex: boolean,
}
const BgConteiner = styled.div`
    background-color: #f7f6fb;
    width: 100vw;
    padding: 10vw 0;
`
const ContentInner = styled.div`
    width: 63%;
    ${sp`
        width: 100%;
    `}
`

const ItenWRapper = styled.div<flex>`
    display:${({ flex }) => flex ? 'flex' : 'block'};
    justify-content:space-between;
    flex-wrap:wrap;
    width:92%;
    margin:0 auto;
`

export const Post: VFC<Props> = ({ home, data, title, title2, flex }) => {
    return (
        <>
            <Bg img="/img/wave-1.png" />
            <BgConteiner>
                <ContentInner>
                    <SectionTitle title={title} title2={title2} />
                    <ItenWRapper flex={flex}>
                        <PostItem home={home} data={data} flex={flex} />
                    </ItenWRapper>
                    <Button side={false} link="/ " text='more' />
                </ContentInner>
            </BgConteiner>
            <Bg img='/img/wave-2.png' />
        </>
    )
}
