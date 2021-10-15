import { ContentFrame } from '../../atoms/design/main/profile/ContentFrame'
import { ContentFrame2 } from '../../atoms/design/main/profile/ContentFrame2'
import { IntroText } from '../../molcules/design/IntroText'

export const Intoro = () => {
    return (
        <>
            <IntroText text1='はじめまして、柊 シュウと申します！' text2='私のブログを見てくださってありがとうございます' text3='このページでは、' />
            <ContentFrame />
            <IntroText text1='について紹介します' text2="このブログに興味を持ってくださった人へ、少しでもブログとわたしのことについて知っていただければ嬉しいです！" text3='' />
            <ContentFrame2 />
        </>
    )
}