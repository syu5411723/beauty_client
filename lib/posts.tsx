import fs from 'fs'
import path from 'path'
import { PostData }from '../components/data/PostData'


export const getAllPostIds = async () => {
    return PostData.map(data=> {
        return {
            params:{
                id: data.id
            }
        }
    })
}