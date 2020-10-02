import { NextPage } from 'next';
import React, { ChangeEvent } from 'react';

import MainLayout from '../../layouts/MainLayout';
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';
import Box from '../../primitives/Box';
import Card from '../../primitives/Card';
import GridCols from '../../primitives/GridCols';
import T from '../../primitives/Typo';
import Hr from '../../primitives/Hr';

import css from './Contact.module.scss';
import commonCss from '../common.module.scss';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import InputLabel from '../../layouts/InputLabel';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

type HomePublicProps = {};

const DEFAULT_FORM = {
  name: '',
  email: '',
  message: '',
}

const Contact: NextPage<HomePublicProps> = (
  _props: HomePublicProps,
) => {
  const [ form, setForm ] = React.useState(DEFAULT_FORM);

  const updateField = React.useCallback(
    (val: string, evt: React.SyntheticEvent<HTMLElement>) => {
      // @ts-ignore
      const { field } = evt.target?.dataset;
      setForm(s => ({ ...s, [field]: val }));
    },
    [setForm],
  );

  const submit = React.useCallback(
    () => {
      console.log(form);
    },
    [form],
  );

  return (
    <MainLayout>
      <Box className={[css.hero, commonCss.contentWrapper]} />
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h2 mb={2}>Get in touch</T>
          <Box className={commonCss.indentedContented}>
            <Box mb={1} style={{ maxWidth: '20em' }}>
              <InputLabel inline label="Your name">
                <Input
                  value={form.name}
                  onChange={updateField}
                  data-field={'name'}
                />
              </InputLabel>
            </Box>
            <Box mb={1} style={{ maxWidth: '20em' }}>
              <InputLabel inline label="Email">
                <Input
                  value={form.email}
                  onChange={updateField}
                  data-field={'email'}
                />
              </InputLabel>
            </Box>
            <Box mb={1} style={{ maxWidth: '40em' }}>
              <InputLabel inline label="Message">
                <textarea
                  className={css.messageBox}
                  value={form.message}
                  data-field={'message'}
                  onChange={(e) => updateField(e.target.value, e)}
                  rows={4}
                />
              </InputLabel>
            </Box>
            <Button onClick={submit} text={'Send'} />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Contact;
