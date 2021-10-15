import Head from 'next/head'
import { ProfilePage } from '../components/pages/ProfilePage'

const Profile = () => {
    return (
        <>
        <Head>
            <title>IT美容師の美容ログ</title>
        </Head>
            <ProfilePage />
        </>
    )
}
export default Profile
