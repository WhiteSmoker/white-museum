import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import { type AppProps } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider, useSSR } from "@nextui-org/react";

import ErrorBoundary from "./_error-boundary";

import "~/styles/globals.css";

import theme from "~/styles/theme";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ session: Session | null }> & {
  Component: NextPageWithLayout;
  pageProps: object;
};

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  // fix When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.
  const { isBrowser } = useSSR();

  return (
    <SessionProvider session={session}>
      {isBrowser && (
        <NextUIProvider theme={theme}>
          <ErrorBoundary>
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </NextUIProvider>
      )}
    </SessionProvider>
  );
};

export default MyApp;
