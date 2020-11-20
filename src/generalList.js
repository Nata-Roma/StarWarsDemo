import React, { useEffect, useState } from 'react';
import FetchService from './fetchApi';
import './persons.css';
import Spinner from './spinner';
import PersonBlock from './personBlock';

const GeneralList = ({ category = 'planets' }) => {
  const url = `https://swapi.dev/api/${category}/`;
  const [personsBlock, setPersonsBlock] = useState({
    persons: [],
    loading: true,
    id: 2
  });

  useEffect(() => {
    FetchService(url)
      .then((body) => {
        setPersonsBlock({
          ...personsBlock,
          persons: body.results,
          loading: false,
          id: 2
        });
      })
      .catch((error) => console.log(error));
  }, [url]);

  const getPersonId = (stringId) => {
    const regExp = /\/([0-9]*)\/$/;
    const personId = stringId.match(regExp)[1];
    return personId;
  };

  const onPersonClickedHandler = (stringId) => {
    const id = getPersonId(stringId);
    setPersonsBlock({ ...personsBlock, id: id });
  };

  const { persons, loading, id } = personsBlock;
  let renderPersons = <Spinner />;
  if (!loading) {
    renderPersons = persons.map((person) => (
      <li key={person.name} onClick={() => onPersonClickedHandler(person.url)}>
        {person.name}
      </li>
    ));
  }
  return (
    <div className="persons-block">
      <div className="persons">{renderPersons}</div>
      <PersonBlock id={id} url={url} category={category} />
    </div>
  );
};

export default GeneralList;
