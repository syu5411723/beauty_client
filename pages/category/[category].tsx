import { createContext } from 'react'
import { useRouter } from "next/router";
import useSWR from 'swr'

import { Category } from '../../components/pages/CategoryMain'


type ContextProps = {
    data: any
}

const fetcher = (url) => fetch(url).then((res) => res.json())

export const DataContext = createContext({} as ContextProps)

const CategoryPage = () => {
    const router = useRouter();
    const { category } = router.query;
    const { data, error } = useSWR(`../api/category/${category}`, fetcher)
    if (error) return <p>Failed to load</p>
    if (!data) return <p>Loading...</p>
    return (
        <>
            <DataContext.Provider value={{ data }} >
                <Category />
            </DataContext.Provider>
        </>
    )
}

export default CategoryPage
