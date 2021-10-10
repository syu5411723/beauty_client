import { ContentFrame } from '../../atoms/design/main/profile/ContentFrame'
import { ContentFrame2 } from '../../atoms/design/main/profile/ContentFrame2'
import { IntroText } from '../../molcules/design/IntroText'

export const Intoro = ({ iText1, iText2, iText3, iText4, iText5, hText1, hText2, hText3 }) => {
    return (
        <>
            <IntroText text1={iText1} text2={iText2} text3={iText3} />
            <ContentFrame text1={hText1} text2={hText2} text3={hText3} />
            <IntroText text1={iText4} text2={iText5} text3='' />
            <ContentFrame2 text1={hText1} text2={hText2} text3={hText3} />
        </>
    )
}