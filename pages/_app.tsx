import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import awsExports from '../src/aws-exports';
import { ThemeProvider } from '../contexts/Theme';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Authenticator.Provider>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </Authenticator.Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
