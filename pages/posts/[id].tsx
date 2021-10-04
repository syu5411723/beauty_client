import { createContext } from 'react'
import { useRouter } from "next/router";
import useSWR from 'swr'

import type { Data } from '../../lib/types'
import { PostMain } from '../../components/pages/PostMain';

type ContextProps = {
    data: any
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export const DataContext = createContext({} as ContextProps)

const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR<Data>(`../api/posts/${id}`, fetcher)
    if (error) return <p>Failed to load</p>
    if (!data) return <p>Loading...</p>
    return (
        <>
        <DataContext.Provider value={{data}}>
            <PostMain/>
        </DataContext.Provider>
        </>
    )
}

export default Post
