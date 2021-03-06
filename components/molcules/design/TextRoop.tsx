import { useEffect } from "react"
import { useContext } from "react"
import { DataContext } from '../../../pages/posts/[id]'

import { Head } from "../../atoms/design/main/Head"
import { Merittlo } from "../../atoms/design/main/post/Merittlo"
import { PostText } from "../../atoms/design/main/post/PostText"

export const TextRoop = () => {
    const { postData } = useContext(DataContext)
    const n = postData[0].textDataId
    useEffect(() => {
        const parent = document.getElementById('parent')
        if (n == 3) {
            parent.removeChild(parent.children[3])
        }
        if (n == 4){
            parent.removeChild(parent.children[5])
            parent.removeChild(parent.children[4])
            parent.removeChild(parent.children[3])
        }
    })
    return (
        <>
            <Head head={postData[0].head1} />
            {postData[0].theme == 'meritto' ? (
                <Merittlo />
            ) : (
                <PostText  t1={postData[0].text1_1} t2={postData[0].text1_2} t3={postData[0].text1_3} t4={postData[0].text1_4} t5={postData[0].text1_5} t6={postData[0].text1_6} t7={postData[0].text1_7} t8={postData[0].text1_8} t9={postData[0].text1_9} isLink={postData[0].isLink1} linkText={postData[0].middleText1} link={postData[0].relatedLink1} headText={postData[0].topText1} img={postData[0].relatedImg} contentText={postData[0].bottomText1} />
            )}
            <div id='parent' >
                <div>
                    <Head head={postData[0].head2} />
                    <PostText  t1={postData[0].text2_1} t2={postData[0].text2_2} t3={postData[0].text2_3} t4={postData[0].text2_4} t5={postData[0].text2_5} t6={postData[0].text2_6} t7={postData[0].text2_7} t8={postData[0].text2_8} t9={postData[0].text2_9} isLink={postData[0].isLink2} linkText={postData[0].middleText2} link={postData[0].relatedLink2} headText={postData[0].topText2} img={postData[0].relatedImg2} contentText={postData[0].bottomText2} />
                </div>
                <div>
                    <Head head={postData[0].head3} />
                    <PostText  t1={postData[0].text3_1} t2={postData[0].text3_2} t3={postData[0].text3_3} t4={postData[0].text3_4} t5={postData[0].text3_5} t6={postData[0].text3_6} t7={postData[0].text3_7} t8={postData[0].text3_8} t9={postData[0].text3_9} isLink={postData[0].isLink3} linkText={postData[0].middleText3} link={postData[0].relatedLink3} headText={postData[0].topText3} img={postData[0].relatedImg3} contentText={postData[0].bottomText3} />
                </div>
                <div>
                    <Head head={postData[0].head4} />
                    <PostText  t1={postData[0].text4_1} t2={postData[0].text4_2} t3={postData[0].text4_3} t4={postData[0].text4_4} t5={postData[0].text4_5} t6={postData[0].text4_6} t7={postData[0].text4_7} t8={postData[0].text4_8} t9={postData[0].text4_9} isLink={postData[0].isLink4} linkText={postData[0].middleText4} link={postData[0].relatedLink4} headText={postData[0].topText4} img={postData[0].relatedImg4} contentText={postData[0].bottomText4} />
                </div>
                <div>
                    <Head head={postData[0].head5} />
                    <PostText  t1={postData[0].text5_1} t2={postData[0].text5_2} t3={postData[0].text5_3} t4={postData[0].text5_4} t5={postData[0].text5_5} t6={postData[0].text5_6} t7={postData[0].text5_7} t8={postData[0].text5_8} t9={postData[0].text5_9} isLink={postData[0].isLink5} linkText={postData[0].middleText5} link={postData[0].relatedLink5} headText={postData[0].topText5} img={postData[0].relatedImg5} contentText={postData[0].bottomText5} />
                </div>
                <div>
                    <Head head={postData[0].head6} />
                    <PostText  t1={postData[0].text6_1} t2={postData[0].text6_2} t3={postData[0].text6_3} t4={postData[0].text6_4} t5={postData[0].text6_5} t6={postData[0].text6_6} t7={postData[0].text6_7} t8={postData[0].text6_8} t9={postData[0].text6_9} isLink={postData[0].isLink6} linkText={postData[0].middleText6} link={postData[0].relatedLink6} headText={postData[0].topText6} img={postData[0].relatedImg6} contentText={postData[0].bottomText6} />
                </div>
                <div>
                    <Head head={postData[0].head7} />
                    <PostText  t1={postData[0].text7_1} t2={postData[0].text7_2} t3={postData[0].text7_3} t4={postData[0].text7_4} t5={postData[0].text7_5} t6={postData[0].text7_6} t7={postData[0].text7_7} t8={postData[0].text7_8} t9={postData[0].text7_9} isLink={postData[0].isLink7} linkText={postData[0].middleText7} link={postData[0].relatedLink7} headText={postData[0].topText7} img={postData[0].relatedImg7} contentText={postData[0].bottomText7} />
                </div>
            </div>
        </>
    )
}
