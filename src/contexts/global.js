import React, { createContext, useContext, useReducer } from 'react';
import storage from '../utils/storage';
import defaultSession, { SESSION_KEY } from '../constants/session';

const initialState = {
  message: '',
  session: defaultSession,
};

const reducer = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'setState':
      newState = {
        ...action.state,
      };
      break;
    case 'setMessage':
      newState = {
        ...state,
        message: action.message,
      };
      break;
    case 'removeMessage':
      newState = {
        ...state,
        message: '',
      };
      break;
    case 'setSession':
      newState = {
        ...state,
        session: { ...state.session, ...action.session },
      };
      break;
    case 'deleteSession':
      newState = {
        ...state,
        session: defaultSession,
      };
      break;
    default:
      return newState;
  }

  storage.set(SESSION_KEY, newState);
  return newState;
};

const StateContext = createContext(initialState);

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const useGlobals = () => useContext(StateContext);

export { reducer, initialState, StateContext, StateProvider, useGlobals };
