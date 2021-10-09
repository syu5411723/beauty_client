import { createContext } from 'react'

import { PostData } from '../../lib/data/PostData';
import { PostMain } from '../../components/pages/PostMain';

type ContextProps = {
    postData: any
}

export const getStaticPaths = async () => {
    const paths = PostData.map(data =>({
        params: {
            id: data.id
        }
    }))
    return {paths, fallback:false}
}
export const getStaticProps = async (context) =>{
    const data = await PostData
    const {id} = context.params
    const postData = data.filter(item => item.id === id);
    return {
        props: {
            postData,
        }
    }
}

export const DataContext = createContext({} as ContextProps)

const Post = ({postData}) => {
    return (
        <>
        <DataContext.Provider value={{postData}}>
            <PostMain/>
            {postData[0].category}
        </DataContext.Provider>
        </>
    )
}

export default Post
