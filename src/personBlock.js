import React, { useEffect, useState } from 'react';
import FetchService from './fetchApi';
import './personBlock.css';

const PersonBlock = ({ id, url, category }) => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    FetchService(url + id + '/')
      .then((body) => {
        setPerson(body);
      })
      .catch((error) => console.log(error));
  }, [id, url, category]);

  const arrayRender = [];
  for (let key in person) {
    if (key !== 'id') {
      arrayRender.push(
        <li key={key}>
          {key}: {person[key]}
        </li>
      );
    }
  }
  return (
    <div className="person-block">
      <h4>Person: {id}</h4>
      <div className="person-block-description">
        <div className="person-img-container">
          <img
            className="person-img"
            src={`https://starwars-visualguide.com/assets/img/${
              category === 'people' ? 'characters' : category
            }/${id}.jpg`}
            alt={person.name}
          />
        </div>
        <ul>{arrayRender.slice(0, 9).map((elem) => elem)}</ul>
      </div>
    </div>
  );
};

export default PersonBlock;
