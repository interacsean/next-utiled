import { NextPage } from 'next';
import { AppContextType } from 'next/dist/next-server/lib/utils';
import React from 'react';
import ErrorBoundary from 'react-error-boundary';

import 'react-responsive-modal/styles.css';
import 'react-slidedown/lib/slidedown.css';
import { SENTRY } from '../../config/Sentry';
import HtmlHead from '../../pwa/components/core/HtmlHead';
import Loading from '../../pwa/components/core/Loading';
import PopupMessage from '../../pwa/components/modules/PopupMessage';
import ModalProvider from '../../pwa/components/primitives/Modal/ModalProvider';
import ToastProvider from '../../pwa/components/primitives/ToastNotification/ToastNotificationProvider';
import T from '../../pwa/components/primitives/Typo';
import '../../pwa/theme/global.scss';

interface AppProps {
  Component: NextPage;
  pageProps: any;
}

function MyApp({ Component, pageProps, reduxStore, reduxPersistor }: AppProps) {
  const [messages, setMessages] = React.useState<React.ReactNode[]>([]);
  const onError = React.useCallback(
    (error: Error) => {
      // if (SENTRY.SEND_ERRORS) {
      //   Sentry.withScope((scope) => {
      //     scope.setLevel(Sentry.Severity.Error);
      //     scope.setFingerprint(['PWA-Client']);
      //   });
      //   Sentry.captureException(error);
      // } else {
      //   console.error(Error);
      // }

      setMessages([
        <>
          <T h3>Sorry</T>
          <T content>We encountered an error.</T>
          <T content-detail>Please refresh the page and try again.</T>
          <T content-detail>
            If the problem persists, <a href="/reset">click here</a> to clear
            your data
          </T>
        </>,
      ]);
    },
    [setMessages],
  );
  // React.useEffect(() => {
  //   if (SENTRY.SEND_ERRORS && SENTRY.DSN) {
  //     Sentry.init({ dsn: SENTRY.DSN });
  //   }
  // }, []);

  return (
    <>
      <HtmlHead />
      <ErrorBoundary
        onError={onError}
        FallbackComponent={() => <PopupMessage messages={messages} />}
      >
        <ToastProvider>
          <ModalProvider>
            <>
              <PopupMessage messages={messages} />
              <Loading />
              <Component {...pageProps} />
            </>
          </ModalProvider>
        </ToastProvider>
      </ErrorBoundary>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContextType) => {
  return {
    pageProps: Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {},
  };
};

export default MyApp;
