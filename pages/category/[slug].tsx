import { createContext } from 'react'
import Head from 'next/head'

import { Category } from '../../components/pages/CategoryMain'
import { PostData } from '../../lib/data/PostData';

type ContextProps = {
    filterData: any
}
export const getStaticPaths = async () => {
    const paths = PostData.map(data =>({
        params: {
            slug: data.category
        }
    }))
    return {paths, fallback:false}
}
export const getStaticProps = async (context) =>{
    const data = await PostData
    const {slug} = context.params
    const filterData = data.filter(item => item.category === slug);
    return {
        props: {
            filterData
        }
    }
}

export const DataContext = createContext({} as ContextProps)

const CategoryPage = ({filterData}) => {
    return (
        <>
        <Head>
            <title>{filterData[0].categorySeo}</title>
        </Head>
            <DataContext.Provider value={{ filterData }} >
                <Category />
            </DataContext.Provider>
        </>
    )
}

export default CategoryPage
