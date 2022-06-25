import '../styles/globals.css'
import Link from 'next/link'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/SignInPage">
          <span>Profile</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
