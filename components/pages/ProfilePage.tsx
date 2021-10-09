import { Layout } from "../Layout/Layout"
import { Contents } from "../molcules/design/Contents"
import { Intoro } from "../organisms/design/Intoro"


export const ProfilePage = () => {
    return (
        <Layout>
            <Intoro
                iText1='はじめまして、柊 シュウと申します！' iText2='このブログを見てくださってありがとうございます。' iText3='このページでは、' iText4='について紹介します' iText5='このブログに興味を持ってくださった人へ、少しでもブログとわたしのことについて知っていただければ嬉しいです！'
                hText1='このブログについて' hText2='プロフィール' hText3='お問い合わせ'
            />
            <Contents head='このブログについて' />
        </Layout>
    )
}
