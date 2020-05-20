import React, { createContext, useState } from 'react';

const initialState = {
  autocompleteOptions: [],
  cohortInput: 13,
  results: [],
  searchInput: '',
  serversAwake: false,
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
