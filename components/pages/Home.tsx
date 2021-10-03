import React, { createContext } from 'react'
import styled from 'styled-components'

import { PostData } from '../data/PostData'
import { PostCategory } from '../molcules/main/post/PostCategory'
import { Thumbnail } from '../molcules/main/Thumbnail'
import { Article } from '../organisms/Article'
import { CategoryLists } from '../organisms/CategoryLists'
import { Post } from '../organisms/Post'
import { ProfileCard } from '../organisms/ProfileCard'
import { Inner } from '../Layout/Inner'

type HomeDataProps = {
    PostData:any
}

export const HomeDataContext = createContext({} as HomeDataProps)



export const Home = () => {
    return (
        <HomeDataContext.Provider value={{PostData}}>
            <Thumbnail />
            <Inner>
                <Post data={PostData}/>
                <CategoryLists />
                <Article title='pick up' title2='おすすめ' data={PostData} category={false} />
                <ProfileCard />
            </Inner>
        </HomeDataContext.Provider>
    )
}
