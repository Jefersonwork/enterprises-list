/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Back from '~/assets/svgs/back.svg';
import { Icon } from '~/components/Icon';

import { Container, Header, Article } from './styles';

function Internal(props) {
  const [data, setData] = useState({});
  const id = decodeURIComponent(props.match.params.id);
  const headers = JSON.parse(localStorage.getItem('headers'));

  useEffect(() => {
    async function request() {
      const response = await axios({
        method: 'get',
        url: `https://empresas.ioasys.com.br/api/v1/enterprises/${id}`,
        headers: {
          'Content-Type': headers['Content-Type'],
          'access-token': headers['access-token'],
          client: headers.client,
          uid: headers.uid,
        },
      });

      setData(response.data.enterprise);
    }
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <Link to="/dashboard">
          <Icon icon={Back} ps="static" />
        </Link>
        <h1>{data.enterprise_name}</h1>
      </Header>

      <Article>
        {data.photo !== null ? (
          <img
            onError={event => event.target.remove()}
            src={`https://empresas.ioasys.com.br${data.photo}`}
            alt={data.enterprise_name}
          />
        ) : (
          <></>
        )}
        <p>{data.description}</p>
      </Article>
    </Container>
  );
}

export default Internal;
