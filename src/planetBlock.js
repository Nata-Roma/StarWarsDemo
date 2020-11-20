import React, { useEffect, useState } from 'react';
import FetchService from './fetchApi';
import './planetBlock.css';
import Spinner from './spinner';

const PlanetBlock = ({ id }) => {
  const url = 'https://swapi.dev/api/planets/';
  const [planetBlock, setPlanetBlock] = useState({
    planet: {},
    loading: true
  });

  useEffect(() => {
    FetchService(url + id + '/')
      .then((body) => {
        setPlanetBlock({
          ...planetBlock,
          planet: {
            id: id,
            name: body.name,
            'rotation period': body.rotation_period,
            'orbital period': body.orbital_period,
            diameter: body.diameter,
            population: body.population
          },
          loading: false
        });
      })
      .catch((error) => console.log(error));
  }, [id]);

  // componentDidMount() {
  //   FetchService(this.url + id + "/")
  //     .then((body) => {
  //       this.setState({
  //         planet: {
  //           id: id,
  //           name: body.name,
  //           "rotation period": body.rotation_period,
  //           "orbital period": body.orbital_period,
  //           diameter: body.diameter,
  //           population: body.population
  //         },
  //         loading: false
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.id !== prevProps.id) {
  //     const id = this.props.id;
  //     FetchService(this.url + id + "/")
  //       .then((body) => {
  //         this.setState({
  //           planet: {
  //             id: id,
  //             name: body.name,
  //             "rotation period": body.rotation_period,
  //             "orbital period": body.orbital_period,
  //             diameter: body.diameter,
  //             population: body.population
  //           },
  //           loading: false
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }

  const { planet, loading } = planetBlock;
  const arrayRender = [];
  for (let key in planet) {
    if (key !== 'id') {
      arrayRender.push(
        <li key={key}>
          {key}: {planet[key]}
        </li>
      );
    }
  }
  let planetRender = <Spinner />;
  if (!loading) {
    planetRender = (
      <div>
        <h4>Planet:</h4>
        <div className="planet-block-description">
          <div className="planet-img-container">
            <img
              className="planet-img"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt={planet.name}
            />
          </div>
          <ul>{arrayRender.map((elem) => elem)}</ul>
        </div>
      </div>
    );
  }
  return <div className="planet-block">{planetRender}</div>;
};

export default PlanetBlock;
