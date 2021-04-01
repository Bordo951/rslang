import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MiniGames: React.FC = () => {
  return (
    <div>
      MiniGames
      <NavLink to="/savannah-entrance-page" data-name="Savannah Entrance-page">
        <Button>Savannah</Button>
      </NavLink>
    </div>
  );
};

export default MiniGames;
