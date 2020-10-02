import React, { FC, useCallback } from 'react';

import Box from '../../primitives/Box';
import T from '../../primitives/Typo';

import css from './Footer.module.scss';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import clx from '../../../../utils/Html/clx';
import { useModalContext } from '../../primitives/Modal/ModalProvider';

import commonCss from '../../pages/common.module.scss';
import InputLabelInline from '../../primitives/InputLabelInline/InputLabelInline';
import InputLabel from '../../layouts/InputLabel';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

type FooterProps = {};

const Footer: FC<FooterProps> = (
  props: FooterProps,
): ReturnType<typeof Box> => {
  const { showModal, hideModal } = useModalContext();

  const onSubscribe = useCallback(
    () => {

    },
    [showModal, hideModal],
  );

  const [ mailingEmail, setMailingEmail ] = React.useState('');

  return (
    <Box className={commonCss.contentWrapper}>
      <Box className={[css.footer, 'theme-override--dark']}>
        <T h3>Stay up to date</T>
        <T content>Join our mailing list.  We'll let you know about upcoming events and the occasional news.</T>
        <Box flex-pri="end" mh={2}>
          <Input
            value={mailingEmail}
            onChange={setMailingEmail}
            placeholder={'Email address'}
          />
          <Box ml={1}>
            <Button text={'Join'} onClick={onSubscribe} />
          </Box>
        </Box>
      </Box>
      <T className={[css.copyright, 'align-center']} mt={3}>
        Humane Technology Australia, Sydney Australia
      </T>
    </Box>
  );
};

export default Footer;
