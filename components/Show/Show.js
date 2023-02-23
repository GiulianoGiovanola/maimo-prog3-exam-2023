import React from 'react';
import { Card, Text } from '@nextui-org/react';

const Show = () => {
  const cargarDatos = async (id) => {
    try {
      const url = 'https://api.tvmaze.com/shows/'[id];
      const res = await fetch(url);
      if (res.ok) {
        const datos = await res.json();
        console.log(datos);
      } else {
        console.log(res.status); // 404
      }
    } catch (err) {
      console.log(err);
    }
  };

  cargarDatos();

  return (
    <Card isPressable>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={'https://api.tvmaze.com/shows/'[id.image.original]}
          objectFit="cover"
          width="100%"
          height={140}
          alt={id.image.original}
        />
      </Card.Body>
      <Card.Footer css={{ justifyItems: 'flex-start' }}>
          <Text b>{id.name}</Text>
          <Text b>{id.type}</Text>
          <Text b>{id.genres}</Text>
          <Text b>{id.rating.average}</Text>
      </Card.Footer>
    </Card>
  );
};

export default Show;
