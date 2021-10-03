import { VFC, useContext } from "react"

import {DataContext} from '../../pages/category/[category]'
import { Inner } from "../Layout/Inner"
import { Post } from "../organisms/Post"



export const Category = () => {
    const {data} = useContext(DataContext)
    const text = data.map(t => t.category)[0]
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
            <Post flex={false} title={filterText()} title2={text} data={data}/>
        </Inner>
    )
}
