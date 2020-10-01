import React, { FC, ReactElement } from 'react';

import Head from 'next/head';

import { SITE } from '../../../../config/Site';

import { HtmlHeadProps } from './HtmlHead.props';

const HtmlHeadView: FC<HtmlHeadProps> = (
  _props: HtmlHeadProps,
): ReactElement<'div'> => {
  return (
    <Head>
      <title key="htmlTitle">Options Profit Calculator</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${SITE.STATIC_URI}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${SITE.STATIC_URI}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${SITE.STATIC_URI}/favicon-16x16.png`}
      />
      <link
        rel="shortcut icon"
        href={`${SITE.STATIC_URI}/favicon.ico`}
        type="image/x-icon"
      />
      <link rel="manifest" href={`${SITE.STATIC_URI}/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${SITE.STATIC_URI}/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#352E3F" />
      <meta
        name="msapplication-TileImage"
        content={`${SITE.STATIC_URI}/images/app-icon/ms-icon-144x144.png`}
      />
      <meta name="theme-color" content="#352E3F" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,500,600,700,900|Raleway:300,400,600,700&display=swap"
        rel="stylesheet"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta httpEquiv="cleartype" content="on" />
      <meta
        content="Options calculator, profit calculator, stock options, stock options calculator, options tool, share options, roi"
        name="keywords"
      />
      <meta
        content="Free and truly unique stock-options profit calculation tool.  View a potential strategy's return on investment against future stock price AND over time.  Your trade might look good at expiry, but what about next week?  OPC maps out these effects of volatility and time to help eliminate the unknowns from high-return trading."
        name="description"
      />
      <meta content="index,follow" name="robots" />
      <meta itemProp="name" content="Options profit calculator" />
      <meta
        itemProp="description"
        content="Free and truly unique stock-options profit calculation tool.  View a potential strategy's return on investment against future stock price AND over time.  Your trade might look good at expiry, but what about next week?  OPC maps out these effects of volatility and time to help eliminate the unknowns from high-return trading."
      />
      <meta itemProp="url" content="" />
      <meta
        itemProp="image"
        content={`${SITE.STATIC_URI}/images/opc-sqr.jpg`}
      />
      <meta property="og:title" content="Options profit calculator" />
      <meta
        property="og:description"
        content="Free and truly unique stock-options profit calculation tool.  View a potential strategy's return on investment against future stock price AND over time.  Your trade might look good at expiry, but what about next week?  OPC maps out these effects of volatility and time to help eliminate the unknowns from high-return trading."
      />
      <meta property="og:url" content="" />
      <meta
        property="og:image"
        content={`${SITE.STATIC_URI}/images/opc-sqr.jpg`}
      />
      <script
        async
        src="https://cdn.fuseplatform.net/publift/tags/2/2055/fuse.js"
      />
    </Head>
  );
};

export default HtmlHeadView;
