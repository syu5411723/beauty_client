import React from 'react'
import { Head } from '../Head'
import { PostText } from '../post/PostText'
import { ContentFrame } from './ContentFrame'

export const ProfileText = () => {
    return (
        <div>
            <div>
                <Head head="このブログについて" />
                <PostText t1="「IT美容師の進めろログ。」美容・仕事・日常について書いていきます。" t2="わたしがこのブログを立ち上げたきっかけは、「お店でおすすめしているいることをもっと広く、大勢の方に伝えたいと思ったから」です。💫" t3="髪の悩みは人それぞれで想像するだけでも沢山あります。少しでも多くの人に伝えていきたいと思っています。😊" t4="わたしの経験や知識が少しでも誰か役に立ったり、誰かを励ませたりしたら、すごく嬉しいです。💫" t5="" t6="" t7="" t8="" t9=""linkText='' link='' headText='' img='' contentText='' isLink />
            </div>
            <div>
                <Head head="プロフィール" />
                <PostText t1="わたしは現在、美容師とITを両立して活動しています。&#x2704;" t2="美容室ではお客様を美しくして、家ではエンジニアとして活動しています。👩‍💻" t3="好きなことは、美容に関すること、健康に関すること、その他には便利な家電などです。💫" t4="" t5="" t6="" t7="" t8="" t9="" linkText='' link='' headText='' img='' contentText='' isLink/>
                <ContentFrame primary={false} text1="生年月日：1993年1月17日" text2="出身地：神奈川県横浜市" text3='居住地：東京都' text4='趣味：ネットショッピング、食事' />
                <PostText t1="ブログを始めたのは2019年4月です。" t2="初めはIT企業に勤めて3年ほどでやめてすぐ、美容師に転職しました。今ではAujauaソムリエという資格も取得しています。👗" t3="休日や暇な時間にエンジニアの活動をしています。" t4="いろいろ大変ではありますが、とても充実しています。😊" t5="" t6="" t7="" t8="" t9="" linkText='' link='' headText='' img='' contentText=''isLink />
            </div>
            <div>
                <Head head="お問い合わせ" />
                <PostText t1="" t2="" t3="" t4="" t5="" t6="" t7="" t8="" t9="" linkText='' link='' headText='' img='' contentText='' isLink/>
            </div>
        </div>
    )
}
