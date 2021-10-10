import { PostData } from '../../lib/data/PostData'
import { CategoryLists } from '../organisms/CategoryLists'
import { Post } from '../organisms/Post'
import { Layout } from '../Layout/Layout'
import { Swiper } from '../molcules/main/Swiper'
import { Inner } from '../Layout/Inner'

const filterData = PostData.filter(data => data.category === 'おすすめ')
export const Home = () => {
    return (
        <>
            <Layout>
                <Swiper />
                <Inner>
                    <Post home={true} data={PostData} title='new posts' title2='新着記事' flex={true} />
                    <CategoryLists />
                    <Post home={false} data={filterData} title='pick up' title2='おすすめ' flex={false} />
                </Inner>
            </Layout>
        </>
    )
}
