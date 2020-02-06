import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green tc dib pa3 ma2 br3 grow bw3 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
