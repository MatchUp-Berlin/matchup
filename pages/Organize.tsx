import type { NextPage } from 'next';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/router'
import Navigation from '../components/misc/Navigation';
import Header from '../components/misc/Header'
import Footer from '../components/misc/Footer'

const OrganizePage: NextPage = () => {
    const router = useRouter()
    const { route } = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
        router.push('/Profile/SignIn')
    } else {
        return(
            <>
            <Header />
            <Navigation />
            </>
        )
    }

};
export default OrganizePage;