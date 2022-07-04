import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { useState } from 'react';

import awsExports from '../src/exportdata'
Amplify.configure(awsExports)

import { ThemeProvider } from '../contexts/Theme';
import { AuthProvider } from '../contexts/Auth';
import { ConsoleLogger } from '@aws-amplify/core';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 30,
            cacheTime: 1000 * 60,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            keepPreviousData: true,
            retry: 3,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Authenticator.Provider>
          <AuthProvider>
            <ThemeProvider>
              <Component {...pageProps} />
            </ThemeProvider>
          </AuthProvider>
        </Authenticator.Provider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
