import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T, { P } from '../../primitives/Typo';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import { ObjRecord } from '../../../../types/util/ObjRecord';
import Section from '../../primitives/Section/Section';

const SITE_NAME = "My Site";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <Section>
        <Box className={['formatted-content']}>
          <T h2>Our Privacy Policy</T>
          <P>Your privacy is critically important to us.</P>

          <P>It is {SITE_NAME}'s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://humanetechnology.com.au">https://humanetechnology.com.au</a> (hereinafter, "us", "we", or "https://humanetechnology.com.au"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</P>
          <P>This Privacy Policy, together with the Terms of service posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms of service.</P>

          <T h4>Website Visitors</T>
          <P>Like most website operators, {SITE_NAME} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. {SITE_NAME}'s purpose in collecting non-personally identifying information is to better understand how {SITE_NAME}'s visitors use its website. From time to time, {SITE_NAME} may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</P>
          <P>{SITE_NAME} also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://humanetechnology.com.au blog posts. {SITE_NAME} only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</P>

          <T h4>Gathering of Personally-Identifying Information</T>
          <P>Certain visitors to {SITE_NAME}'s websites choose to interact with {SITE_NAME} in ways that require {SITE_NAME} to gather personally-identifying information. The amount and type of information that {SITE_NAME} gathers depends on the nature of the interaction. For example, we ask visitors
            who sign up to our newsletter to provide an email address.</P>

          <T h4>Security</T>
          <P>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</P>


          <T h4>Links To External Sites</T>
          <P>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of service of every site you visit.</P>
          <P>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</P>


          <T h4>Protection of Certain Personally-Identifying Information</T>
          <P>{SITE_NAME} discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on {SITE_NAME}'s behalf or to provide services available at {SITE_NAME}'s website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using {SITE_NAME}'s website, you consent to the transfer of such information to them. {SITE_NAME} will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, {SITE_NAME} discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when {SITE_NAME} believes in good faith that disclosure is reasonably necessary to protect the property or rights of {SITE_NAME}, third parties or the public at large.</P>
          <P>If you are a registered user of https://humanetechnology.com.au and have supplied your email address, {SITE_NAME} may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with {SITE_NAME} and our products. We primarily use our website to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. {SITE_NAME} takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</P>

          <T h4>Aggregated Statistics</T>
          <P>{SITE_NAME} may collect statistics about the behavior of visitors to its website. {SITE_NAME} may display this information publicly or provide it to others. However, {SITE_NAME} does not disclose your personally-identifying information.</P>

          <T h4>Cookies</T>
          <P>To enrich and perfect your online experience, {SITE_NAME} uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</P>
          <P>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. {SITE_NAME} uses cookies to help {SITE_NAME} identify and track visitors, their usage of https://humanetechnology.com.au, and their website access preferences. {SITE_NAME} visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using {SITE_NAME}'s websites, with the drawback that certain features of {SITE_NAME}'s websites may not function properly without the aid of cookies.</P>
          <P>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to {SITE_NAME}'s use of cookies.</P>

          <T h4>Privacy Policy Changes</T>
          <P>Although most changes are likely to be minor, {SITE_NAME} may change its Privacy Policy from time to time, and in {SITE_NAME}'s sole discretion. {SITE_NAME} encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</P>

          <T h4>Credit & Contact Information</T>
          <P>This privacy policy was originally created at the help of <a href="https://privacygenerator.net/privacypolicy/" title="Privacy policy template generator" target="_blank">privacygenerator.net</a>. If you have any questions about this Privacy Policy, please <Link to={ROUTE_PATHS.CONTACT}>contact us</Link>.</P>
        </Box>
      </Section>
    </MainLayout>
  );
};

export default PrivacyPolicy;
