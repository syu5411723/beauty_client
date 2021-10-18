import styled from "styled-components"
import Link from 'next/link'

import { useContext } from 'react'
import { DataContext } from '../../../pages/posts/[id]'
import { LinkHead } from "./LInkHead"
import { RelatedLink } from "./RelatedLink"
import { LinkContent } from "./LinkContent"

const Container = styled.div`
    width:100%;
    margin:0 auto;
    background-color: #FEFFE0;
    cursor:pointer;
    opacity:1;
    transition: opacity 0.15s;
    &:hover {
        opacity: 0.8;
        transition: opacity 0.3s;
    }
`
const Inner = styled.div`
    padding: 5%;
    font-size:calc(0.75rem + ((1vw - 3.5px) * 0.6316));
`


export const InternalLink = ({ isLink, linkText, link, headText, img, contentText }) => {
    const { postData } = useContext(DataContext)
    return (
        <>
            {isLink && (
                <Container>
                    <Link href={link}>
                        <Inner>
                            <LinkHead text={headText} />
                            <RelatedLink linkText={linkText} />
                            <LinkContent img={img} contentText={contentText} />
                        </Inner>
                    </Link>
                </Container>
            )}
        </>
    )
}
