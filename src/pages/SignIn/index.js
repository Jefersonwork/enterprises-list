import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Mail from '~/assets/svgs/email.svg';
import Lock from '~/assets/svgs/lock.svg';
import Visible from '~/assets/svgs/visible.svg';
import Unvisible from '~/assets/svgs/unvisible.svg';

import Logo from '~/assets/images/logo-home.png';
import { Icon } from '~/components/Icon';
import { Loading } from '~/components/Loading';

import {
  Container,
  Form,
  FormImput,
  Alert,
  ErrorMessagem,
  SubmitButton,
} from './styles';

function SignIn() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit() {
    setLoading(true);

    const datas = { email, password };

    const data = JSON.stringify(datas);

    try {
      const response = await axios({
        method: 'post',
        url: 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in',
        data,
        headers: {
          'content-type': 'application/json',
        },
      });

      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('headers', JSON.stringify(response.headers));
      setLoading(false);
      history.push('/dashboard');
    } catch (error) {
      setLoading(false);
      setAlert(true);
    }
  }

  function handleChangeLogin(event) {
    setEmail(event.target.value);
    if (alert) setAlert(false);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
    if (alert) setAlert(false);
  }

  return (
    <>
      {loading ? (
        <Loading>
          <div />
        </Loading>
      ) : (
        <></>
      )}

      <Container>
        <img src={Logo} alt="ioasys" />
        <h1>Bem-vindo ao empresas</h1>
        <p>
          Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
        </p>

        <Form>
          <FormImput>
            <Icon icon={Mail} />
            <input
              type="email"
              alt="email"
              placeholder="Email"
              onChange={e => handleChangeLogin(e)}
              value={email}
            />
            <Alert visible={alert}>!</Alert>
            <hr />
          </FormImput>

          <FormImput>
            <Icon icon={Lock} />
            <input
              type={visible ? 'text' : 'password'}
              alt="senha"
              placeholder="Senha"
              onKeyPress={event =>
                event.key === 'Enter' ? handleSubmit() : false
              }
              onChange={e => handleChangePassword(e)}
              value={password}
            />

            {alert ? (
              <Alert visible={alert}>!</Alert>
            ) : (
              <button type="button" onClick={() => setVisible(!visible)}>
                <Icon icon={visible ? Visible : Unvisible} />
              </button>
            )}
            <hr />
          </FormImput>

          <ErrorMessagem visible={false}>
            Credenciais informadas são inválidas, tente novamente.
          </ErrorMessagem>

          <SubmitButton
            type="button"
            onClick={() => handleSubmit()}
            disabled={alert}
          >
            Entrar
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}

export default SignIn;
