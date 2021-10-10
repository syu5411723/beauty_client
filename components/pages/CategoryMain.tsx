import { VFC, useContext } from "react"

import { DataContext } from '../../pages/category/[slug]'
import { Layout } from '../Layout/Layout'
import { Post } from "../organisms/Post"
import { CategoryTitle } from '../molcules/main/categoryPage/CategoryTitle'
import { BreadList } from "../Layout/BreadList"
import { Inner } from "../Layout/Inner"



export const Category = () => {
    const { filterData } = useContext(DataContext)
    const text = filterData.map(t => t.category)[0]
    const filterText = () => {
        let result;
        if (text === 'ヘアケア') {
            result = 'hair care'
        } else if (text === 'スキンケア') {
            result = 'skin care'
        } else if (text === '趣味') {
            result = 'hobby'
        } else if (text === '健康') {
            result = 'health'
        }
        return result
    }
    const BreadText = () => {
        let result;
        if (text === 'ヘアケア') {
            result = 'ヘアケア'
        } else if (text === 'スキンケア') {
            result = 'スキンケア'
        } else if (text === '趣味') {
            result = '趣味'
        } else if (text === '健康') {
            result = '健康'
        }
        return result
    }
    return (
        <Layout>
            <Inner>
                <BreadList home={false} category={true} post={false} categoryText={BreadText()} postText='' />
                <CategoryTitle />
                <Post home={false} flex={false} title={filterText()} title2={text} data={filterData} />
            </Inner>
        </Layout>
    )
}
