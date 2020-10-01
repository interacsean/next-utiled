import HtmlHeadView from '../pwa/components/core/HtmlHead';

import '../pwa/theme/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HtmlHeadView />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
