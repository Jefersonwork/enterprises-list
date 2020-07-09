/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable radix */
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Search from '~/assets/svgs/search.svg';
import Close from '~/assets/svgs/close.svg';

import LogoNav from '~/assets/images/logo-nav.png';
import { Icon } from '~/components/Icon';
import { Loading } from '~/components/Loading';

import {
  Container,
  Header,
  Logo,
  SearchForm,
  Input,
  SearchButton,
  CloseButton,
  Text,
  Result,
  Card,
  Message,
} from './styles';

function Dashboard() {
  const [enterprises, setEnterprise] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState(false);

  const searchInput = useRef(null);

  const headers = JSON.parse(localStorage.getItem('headers'));

  async function request(value) {
    const isnumber = parseInt(value);
    let type;

    if (value === 'all' || value === 'All') {
      type = '/';
    } else {
      // eslint-disable-next-line no-restricted-globals
      type = isNaN(isnumber)
        ? `?name=${value}`
        : `?enterprise_types=${isnumber}`;
    }

    setLoading(true);

    try {
      const response = await axios({
        method: 'get',
        url: `https://empresas.ioasys.com.br/api/v1/enterprises${type}`,
        headers: {
          'Content-Type': headers['Content-Type'],
          'access-token': headers['access-token'],
          client: headers.client,
          uid: headers.uid,
        },
      });

      setMessage(true);
      setLoading(false);
      setSearch('');
      setEnterprise(response.data.enterprises);
    } catch (error) {
      setMessage(true);
      setLoading(false);
    }
  }

  function handleSubmit() {
    if (!active) {
      return setActive(true);
    }
    if (search === '') {
      return alert('Esse campo não pode ser vazio');
    }

    return request(search);
  }

  useEffect(() => {
    searchInput.current.focus();
  });

  return (
    <Container>
      {loading ? (
        <Loading>
          <div />
        </Loading>
      ) : (
        <></>
      )}

      <Header>
        <Logo active={active}>
          <img src={LogoNav} alt="ioasys" />
        </Logo>

        <SearchForm active={active}>
          <SearchButton type="button" onClick={() => handleSubmit()}>
            <Icon icon={Search} ps="static" />
          </SearchButton>

          <Input
            type="text"
            placeholder="Pesquisar"
            atl="buscar"
            active={active}
            ref={searchInput}
            onKeyPress={event =>
              event.key === 'Enter' ? handleSubmit() : false
            }
            onChange={event => setSearch(event.target.value)}
            value={search}
          />

          <CloseButton
            type="button"
            onClick={() => setActive(false)}
            active={active}
          >
            <Icon icon={Close} ps="static" />
          </CloseButton>
        </SearchForm>
      </Header>

      {!active ? (
        <Text>
          <h3>Clique na busca para iniciar.</h3>
        </Text>
      ) : (
        <Result>
          {message && enterprises.length < 1 ? (
            <Message>
              <h2>Nenhuma empresa foi encontrada para a busca realizada.</h2>
            </Message>
          ) : (
            enterprises.map(enterprise => (
              <Link
                to={{
                  pathname: `/internal/${encodeURIComponent(enterprise.id)}`,
                }}
              >
                <Card Key={`${enterprise.id}`}>
                  {enterprise.photo === null ? (
                    <></>
                  ) : (
                    <img
                      onError={event => event.target.remove()}
                      src={`https://empresas.ioasys.com.br${enterprise.photo}`}
                      alt={enterprise.enterprise_name}
                    />
                  )}

                  <div>
                    <h3>{enterprise.enterprise_name}</h3>
                    <h4>{enterprise.enterprise_type.enterprise_type_name}</h4>
                    <span>{enterprise.country}</span>
                  </div>
                </Card>
              </Link>
            ))
          )}
        </Result>
      )}
    </Container>
  );
}

export default Dashboard;
