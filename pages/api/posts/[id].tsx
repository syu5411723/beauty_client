import { NextApiRequest, NextApiResponse } from "next"
import { PostData } from "../../../lib/data/PostData"
import { Data } from "../../../lib/types"


const getPostData = (id:string) => {
    const datas:Data[] = PostData
    return datas.find(data => data.id === id)
}


export default (req:NextApiRequest ,res:NextApiResponse) => {
    const id = req.query.id
    const data =getPostData(id as string)
    res.status(200).json(data)
}