import { ProfileText } from "../atoms/design/main/profile/ProfileText"
import { Layout } from "../Layout/Layout"
import { Intoro } from "../organisms/design/Intoro"


export const ProfilePage = () => {
    return (
        <Layout>
            <Intoro />
            <ProfileText />
        </Layout>
    )
}
