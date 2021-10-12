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
            // parent.removeChild(parent.children[3])
        }
        if (n == 4){
            parent.removeChild(parent.children[3])
        }
    })
    return (
        <>
            <Head head={postData[0].head1} />
            {postData[0].theme == 'meritto' ? (
                <Merittlo />
            ) : (
                <PostText  t1={postData[0].text1_1} t2={postData[0].text1_2} t3={postData[0].text1_3} t4={postData[0].text1_4} t5={postData[0].text1_5} t6={postData[0].text1_6} t7={postData[0].text1_7} t8={postData[0].text1_8} t9={postData[0].text1_9} />
            )}
            <div id='parent' >
                <div>
                    <Head head={postData[0].head2} />
                    <PostText  t1={postData[0].text2_1} t2={postData[0].text2_2} t3={postData[0].text2_3} t4={postData[0].text2_4} t5={postData[0].text2_5} t6={postData[0].text2_6} t7={postData[0].text2_7} t8={postData[0].text2_8} t9={postData[0].text2_9} />
                </div>
                <div>
                    <Head head={postData[0].head3} />
                    <PostText  t1={postData[0].text3_1} t2={postData[0].text3_2} t3={postData[0].text3_3} t4={postData[0].text3_4} t5={postData[0].text3_5} t6={postData[0].text3_6} t7={postData[0].text3_7} t8={postData[0].text3_8} t9={postData[0].text3_9} />
                </div>
                <div>
                    <Head head={postData[0].head4} />
                    <PostText  t1={postData[0].text4_1} t2={postData[0].text4_2} t3={postData[0].text4_3} t4={postData[0].text4_4} t5={postData[0].text4_5} t6={postData[0].text4_6} t7={postData[0].text4_7} t8={postData[0].text4_8} t9={postData[0].text4_9} />
                </div>
                <div>
                    <Head head={postData[0].head5} />
                    <PostText  t1={postData[0].text5_1} t2={postData[0].text5_2} t3={postData[0].text5_3} t4={postData[0].text5_4} t5={postData[0].text5_5} t6={postData[0].text5_6} t7={postData[0].text5_7} t8={postData[0].text5_8} t9={postData[0].text5_9} />
                </div>
            </div>
        </>
    )
}
