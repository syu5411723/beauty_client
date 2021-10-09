import styled from "styled-components"
import { SectionTitle } from "../../../Layout/main/SectionTitlte"


const Wrapper = styled.div`
    opacity:0.6;
`

export const CategoryTitle = () => {
    return (
        <Wrapper>
            <SectionTitle title='category' title2=''  />
        </Wrapper>
    )
}
