import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const renderList = robots.map(({ name, email, id }) => (
    <Card name={name} email={email} id={id} key={id} />
  ));

  return <div>{renderList}</div>;
};

export default CardList;
