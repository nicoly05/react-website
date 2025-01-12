import React, { useContext } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Checkbox } from '@material-ui/core';
import { GlobalContext } from '../context/GlobalState';

const Requisitos = () => {
  const { requisitos, toggleRequisito } = useContext(GlobalContext);

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: 20 }}>Requisitos da Empresa</Typography>
      <List>
        {requisitos.map(req => (
          <ListItem key={req.id} button onClick={() => toggleRequisito(req.id)}>
            <Checkbox checked={req.completed} />
            <ListItemText primary={req.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Requisitos;
