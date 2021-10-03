import { VFC } from 'react'
import { useRouter } from "next/router";

import type { Data } from '../../lib/types'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())


const Post:VFC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR<Data>(`../api/posts/${id}`, fetcher)
    if (error) return <p>Failed to load</p>
    if (!data) return <p>Loading...</p>

    return <p>{data.id}, {data.id}, {data.category}</p>
}

export default Post
