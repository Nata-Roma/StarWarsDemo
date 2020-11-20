import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GeneralList from './generalList';
import Header from './header';
import PlanetBlock from './planetBlock';
import './styles.css';

const App = () => {
  const [id, setId] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      const idCalc = Math.floor(Math.random() * 15 + 1);
      setId(idCalc);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <Router>
      <div style={{ backgroundColor: '#222', boxSizing: 'border-box' }}>
        <Header />
        <PlanetBlock id={id} />
        <Switch>
          <Route path="/" exact>
            <GeneralList category="planets" />
          </Route>
          <Route path="/persons">
            <GeneralList category="people" />
          </Route>
          <Route path="/starships">
            <GeneralList category="starships" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
