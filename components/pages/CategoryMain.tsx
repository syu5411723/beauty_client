import { VFC, useContext } from "react"

import { DataContext } from '../../pages/category/[slug]'
import { Layout } from '../Layout/Layout'
import { Post } from "../organisms/Post"
import { CategoryTitle } from '../molcules/main/categoryPage/CategoryTitle'
import { BreadList } from "../Layout/BreadList"



export const Category = () => {
    const { filterData } = useContext(DataContext)
    const text = filterData.map(t => t.category)[0]
    const filterText = () => {
        let result;
        if (text === 'ヘアケア') {
            result = 'hair care'
        } else if (text === 'スキンケア') {
            result = 'skin care'
        }
        return result
    }
    const BreadText = () => {
        let result;
        if (text === 'ヘアケア') {
            result = 'ヘアケア'
        } else if (text === 'スキンケア') {
            result = 'スキンケア'
        }
        return result
    }
    return (
        <Layout>
            <BreadList home={false} category={true} post={false} categoryText={BreadText()} postText='' />
            <CategoryTitle />
            <Post flex={false} title={filterText()} title2={text} data={filterData} />
        </Layout>
    )
}
