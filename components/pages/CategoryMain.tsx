import { VFC, useContext } from "react"

import { DataContext } from '../../pages/category/[slug]'
import { Inner } from "../Layout/Inner"
import { Post } from "../organisms/Post"
import { CategoryTitle } from '../molcules/main/categoryPage/CategoryTitle'



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
    return (
        <Inner>
            <CategoryTitle />
            <Post flex={false} title={filterText()} title2={text} data={filterData} />
        </Inner>
    )
}
