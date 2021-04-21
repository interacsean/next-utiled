import { NextPage } from 'next';
import React, { FormEvent } from 'react';
import fetch from 'cross-fetch';
import { Nullable } from 'errable';

import { serialize } from '../../../../utils/Data/serialize/serialize';
import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';
import InputLabel from '../../layouts/InputLabel';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

import css from './Contact.module.scss';
import GridCols from '../../primitives/GridCols';
import { ObjRecord } from '../../../../types/util/ObjRecord';
import Section from '../../primitives/Section/Section';

const DEFAULT_FORM = {
  name: '',
  email: '',
  message: '',
};

const Contact: NextPage = () => {
  const [ form, setForm ] = React.useState(DEFAULT_FORM);
  const [ isSending, setIsSending ] = React.useState(false);
  const [ msgReceived, setMsgRecieved ] = React.useState(false);
  const formRef = React.useRef<Nullable<HTMLFormElement>>(null);

  const updateField = React.useCallback(
    (val: string, evt: React.SyntheticEvent<HTMLElement>) => {
      // @ts-ignore
      const { field } = evt.target?.dataset;
      setForm(s => ({ ...s, [field]: val }));
    },
    [setForm],
  );

  const submit = React.useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      
      const { current: formElement } = formRef;
      if (formElement && !isSending) {
        setIsSending(true);
        fetch('/', {
          method: 'POST',
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: serialize({ ...form, 'form-name': 'contact' }),
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
    [formRef, form, isSending],
  );

  return (
    <MainLayout >
      <Section>
        <Box className={['formatted-content']}>
          <T h2 mb={2}>Get in touch</T>
          <T content>If you'd like to get involved or just have questions about what we do or what's going on,
          send us a message</T>
          <Box mv={4}>
            <form ref={formRef} onSubmit={submit}>
              <input type="hidden" name="form-name" value="contact" />
              <GridCols>
                <Box mb={2} className={['_cols-12 _cols-tab-plus-6', css.lineInput]}>
                  <InputLabel inline label="Your name">
                    <Input
                      value={form.name}
                      onChange={updateField}
                      data-field={'name'}
                    />
                  </InputLabel>
                </Box>
                <Box mb={2} className={['_cols-12 _cols-tab-plus-6', css.lineInput]}>
                  <InputLabel inline label="Email">
                    <Input
                      value={form.email}
                      onChange={updateField}
                      data-field={'email'}
                    />
                  </InputLabel>
                </Box>
                <Box mb={2} className={'_cols-12'}>
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
              </GridCols>
              {
                msgReceived && (
                  <T className={'text-success'}>Your message has been received</T>
                )
              }
              <Box className={css.buttonHolder}>
                <Button loading={isSending} text={'Send'} type="submit" full-width />
              </Box>
            </form>
          </Box>
        </Box>
      </Section>
    </MainLayout>
  );
};

export default Contact;
