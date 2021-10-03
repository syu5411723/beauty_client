import { VFC, useContext } from "react"
import { useRouter } from "next/router"

import {DataContext} from '../../pages/category/[category]'
import { Inner } from "../Layout/Inner"
import { Post } from "../organisms/Post"
import { SectionTitle } from "../Layout/SectionTitlte"



export const Category = () => {
    const {data} = useContext(DataContext)
    const text = data.map(t => t.category)[1]
    return (
        <Inner>
            <SectionTitle title={text} title2="カテゴリー" />
            <Post data={data}/>
        </Inner>
    )
}
