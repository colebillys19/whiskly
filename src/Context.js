import React, { createContext, useState } from 'react';
import { mockOptions } from './mockData';

const initialState = {
  autocompleteOptions: mockOptions,
  cohortInput: 13,
  searchInput: '',
};

const Context = createContext([{}, () => {}]);

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  );
}

export default Context;
