import { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [name, setName] = useState('');

  const values = { page, setPage, gender, setGender, species, setSpecies, name, setName };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};