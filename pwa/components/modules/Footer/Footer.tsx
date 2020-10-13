import React, { FC, FormEvent, useCallback } from 'react';
import { Nullable } from 'errable';

import { serialize } from '../../../../utils/Data/serialize/serialize';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

import commonCss from '../../pages/common.module.scss';
import css from './Footer.module.scss';
import GridCols from '../../primitives/GridCols';
import BodySegment from '../../layouts/BodySegment';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';

type FooterProps = {};

const Footer: FC<FooterProps> = (
  props: FooterProps,
): ReturnType<typeof Box> => {
  const [ isSending, setIsSending ] = React.useState(false);
  const [ msgReceived, setMsgRecieved ] = React.useState(false);
  const formRef = React.useRef<Nullable<HTMLFormElement>>(null);
  const [ mailingEmail, setMailingEmail ] = React.useState('');

  const onSubscribe = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const { current: formElement } = formRef;
      if (formElement && !isSending) {
        setIsSending(true);
        // formElement.attributes.getNamedItem('action')?.value
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: serialize({ email: mailingEmail, 'form-name': 'newsletter' }),
        })
          .then((resp) => {
            if (!resp.ok) throw Error('Not received');
            setMsgRecieved(true);
            setIsSending(false);
          })
          .catch(() => {
            setIsSending(false);
          });
        ;
      }
    },
    [formRef, mailingEmail, isSending],
  );

  return (
    <Box className={commonCss.contentWrapper}>
      <Box className={[css.footer, commonCss.contentInner, 'theme-override--dark']}>
        <BodySegment heading="" noLine>
          <Box className={css._footerContent}>
            { /* @ts-ignore */ }
            <T h3 mb={1}><a name={'mailinglist'}></a>Stay up to date</T>
            <T content>Join our mailing list.  We'll let you know about upcoming events and the occasional news.</T>
            <form ref={formRef} onSubmit={onSubscribe}>
              <input type="hidden" name="form-name" value="newsletter" />
              <GridCols>
                <Input
                  className={'_cols-12 _cols-tab-plus-8'}
                  value={mailingEmail}
                  onChange={setMailingEmail}
                  placeholder={'Email address'}
                />
                <Box className={'_cols-12 _cols-tab-plus-4'} mv={1}>
                  <Button loading={isSending} text={'Join'} type='submit' full-width />
                </Box>
              </GridCols>
              { msgReceived && (
                <T className={'text-success'}>Thank you for subscribing</T>
              )}
            </form>
          </Box>
        </BodySegment>
      </Box>
      <Box flex-pri="center" mt={3}>
        <Box mh={1 / 2}>
          <Link to={ROUTE_PATHS.PRIVACY}>Privacy policy</Link>
        </Box>
        <Box mh={1 / 2}>
          <Link to={ROUTE_PATHS.TERMS_OF_SERVICE}>Terms of service</Link>
        </Box>
      </Box>
      <T className={[css.copyright, 'align-center']} mt={1}>
        &copy; Humane Technology Australia
      </T>
    </Box>
  );
};

export default Footer;
