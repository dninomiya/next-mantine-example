import AppHeader from '@/components/Layout/AppHeader';
import Shell from '@/components/Layout/Shell';
import { Container, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Shell>
          <Component {...pageProps} />
        </Shell>
      </MantineProvider>
    </>
  );
}
