import HtmlHeadView from '../pwa/components/core/HtmlHead';

import '../pwa/theme/global.scss';

function MyApp({ Component, pageProps }) {
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
