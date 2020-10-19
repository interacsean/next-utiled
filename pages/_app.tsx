import React from 'react';
import { useRouter } from 'next/router';

import HtmlHeadView from '../pwa/components/core/HtmlHead';

import '../pwa/theme/global.scss';
import ANALYTICS from '../config/Analytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  React.useEffect(() => {
    console.log(ANALYTICS)
    let handleRouteChange = (url: string) => {};
    if (ANALYTICS.ENABLE_TRACKING && ANALYTICS.GA_TRACKING_ID) {
      // @ts-ignore
      const googleAnalytics = window?.ga;
      if (googleAnalytics && ANALYTICS?.GA_TRACKING_ID) {
        googleAnalytics('create', ANALYTICS?.GA_TRACKING_ID, 'auto');
        googleAnalytics('set', 'dimension1', 'kronos-v3');
        googleAnalytics('set', 'dimension2', 'publift');
        // @ts-ignore (ignores querystring)
        const page = document.location.pathname;
        googleAnalytics('send', 'pageview', page);
      }

      handleRouteChange = (url: string) => {
        const page = url.replace(/\?.*/, '');
        googleAnalytics('send', 'pageview', page);
      };
      router.events.on('routeChangeStart', handleRouteChange);
    }
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <>
      <HtmlHeadView />
      {/* Raw forms for Netlify */}
      <div dangerouslySetInnerHTML={{ __html: `
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
<form name="newsletter" netlify netlify-honeypot="bot-field" hidden>
  <input type="email" name="email" />
</form>`}} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
