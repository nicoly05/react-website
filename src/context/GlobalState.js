import React, { createContext, useReducer } from 'react';

const initialState = {
  requisitos: [
    { id: 1, description: 'Relatório de impostos', completed: false },
    { id: 2, description: 'Auditoria interna', completed: false },
    { id: 3, description: 'Documentação para faturas', completed: false }
  ]
};

export const GlobalContext = createContext(initialState);

function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_REQUISITO':
      return {
        ...state,
        requisitos: state.requisitos.map(req =>
          req.id === action.payload ? { ...req, completed: !req.completed } : req
        )
      };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleRequisito(id) {
    dispatch({ type: 'TOGGLE_REQUISITO', payload: id });
  }

  return (
    <GlobalContext.Provider value={{ requisitos: state.requisitos, toggleRequisito }}>
      {children}
    </GlobalContext.Provider>
  );
};
