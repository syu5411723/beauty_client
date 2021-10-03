import { NextApiResponse, NextApiRequest  } from "next";
import {PostData} from '../../../components/data/PostData'
import { Data } from "../../../lib/types";

const getPostCategory = (category: string) => {
    const datas:Data[] = PostData
    return datas.filter(data => data.category === category)
}

export default (req:NextApiRequest, res:NextApiResponse) => {
    const category = req.query.category
    const data = getPostCategory(category as string)
    res.status(200).json(data)
}