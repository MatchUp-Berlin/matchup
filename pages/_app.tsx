import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Authenticator.Provider>
        <Component {...pageProps} />
      </ Authenticator.Provider>
  )
}

export default MyApp
