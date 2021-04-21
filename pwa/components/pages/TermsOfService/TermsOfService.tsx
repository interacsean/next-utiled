import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T, { P } from '../../primitives/Typo';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import { ObjRecord } from '../../../../types/util/ObjRecord';
import Section from '../../primitives/Section/Section';

const SITE_NAME = 'My Site';

const TermsOfService = () => {
  return (
    <MainLayout>
      <Section>
        <Box className={['formatted-content']}>
          <T h2>Our Privacy Policy</T>
          <T h4>Welcome to {SITE_NAME}</T>
          <P>These terms of service outline the rules and regulations for the use of {SITE_NAME}'s Website.</P> <br />
          <P>By accessing this website we assume you accept these terms of service in full. Do not continue to use {SITE_NAME}'s website
            if you do not accept all of the terms of service stated on this page.</P>
          <T h4>Cookies</T>
          <P>We employ the use of cookies. By using {SITE_NAME}'s website you consent to the use of cookies
            in accordance with {SITE_NAME}'s privacy policy.</P><P>Most of the modern day interactive web sites
          use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site
          to enable the functionality of this area and ease of use for those people visiting.</P>
          <T h4>License</T>
          <P>Unless otherwise stated, {SITE_NAME} and/or it's licensors own the intellectual property rights for
            all material on {SITE_NAME}. All intellectual property rights are reserved. You may view and/or print
            pages from https://humanetechnology.com.au for your own personal use subject to restrictions set in these terms of service.</P>
          <P>You must not:</P>
          <ol>
            <T tagName="li" content>Republish material from https://humanetechnology.com.au</T>
            <T tagName="li" content>Sell, rent or sub-license material from https://humanetechnology.com.au</T>
            <T tagName="li" content>Reproduce, duplicate or copy material from https://humanetechnology.com.au</T>
          </ol>
          <P>Redistribute content from {SITE_NAME} (unless content is specifically made for redistribution).</P>
          <T h4>Iframes</T>
          <P>Without prior approval and express written permission, you may not create frames around our Web pages or
            use other techniques that alter in any way the visual presentation or appearance of our Web site.</P>
          <T h4>Reservation of Rights</T>
          <P>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular
            link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also
            reserve the right to amend these terms of service and its linking policy at any time. By continuing
            to link to our Web site, you agree to be bound to and abide by these linking terms of service.</P>
          <T h4>Removal of links from our website</T>
          <P>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact
            us about this. We will consider requests to remove links but will have no obligation to do so or to respond
            directly to you.</P>
          <P>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness
            or accuracy; nor do we commit to ensuring that the website remains available or that the material on the
            website is kept up to date.</P>
          <T h4>Content Liability</T>
          <P>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify
            and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any
            page on your Web site or within any context containing content or materials that may be interpreted as
            libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or
            other violation of, any third party rights.</P>
          <T h4>Disclaimer</T>
          <P>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</P>
          <ol>
            <T tagName="li" content>limit or exclude our or your liability for death or personal injury resulting from negligence;</T>
            <T tagName="li" content>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</T>
            <T tagName="li" content>limit any of our or your liabilities in any way that is not permitted under applicable law; or</T>
            <T tagName="li" content>exclude any of our or your liabilities that may not be excluded under applicable law.</T>
          </ol>
          <P>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a)
            are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or
            in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort
            (including negligence) and for breach of statutory duty.</P>
          <P>To the extent that the website and the information and services on the website are provided free of charge,
            we will not be liable for any loss or damage of any nature.</P>          
          <T h4>Credit & Contact Information</T>
          <P>This Terms of service page was created at <a
                                                          href="https://privacygenerator.net">privacygenerator.net</a>. If you have
            any queries regarding any of our terms, please <Link to={ROUTE_PATHS.CONTACT}>contact us</Link>.</P>
        </Box>
      </Section>
    </MainLayout>
  );
};

export default TermsOfService;
