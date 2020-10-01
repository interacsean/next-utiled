import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { SENTRY } from '../config/Sentry';

// Captures SSR errors
//
// const handleError = (err: Error | {} | null | undefined) => {
//   if (SENTRY.SEND_ERRORS) {
//     Sentry.withScope((scope) => {
//       scope.setLevel(Sentry.Severity.Error);
//       scope.setFingerprint(['PWA-SSR']);
//     });
//     Sentry.captureException(err);
//   } else {
//     console.error(Error);
//   }
// };
// process.on('unhandledRejection', handleError);
// process.on('uncaughtException', handleError);

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
