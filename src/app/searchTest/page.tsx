"use client"
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from 'axios';

type SearchProps = {
  cod: number;
  link: string;
  descr_nome: string; 
};


const AsyncSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchProps[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);

    try {
      const response = await axios.get<SearchProps[]>(`https://transparencia.apps.tcu.gov.br/rest/transparencia/servicoPorKeyword/${newTerm}`);
      setSearchResults(response.data.sort((a, b) => a.descr_nome.localeCompare(b.descr_nome)));
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  return (
    <>
      <Stack sx={{width:600}}>
          <Autocomplete
          id="live-search"
          options={searchResults}
          getOptionLabel={(option) => option.descr_nome}
          renderOption={(props, option) => (
            <div {...props}>
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                {option.descr_nome}
              </a>
            </div>
          )}
          renderInput={(params) => <TextField {...params} label="Encontre o que procura" onChange={handleInputChange} />}
          noOptionsText="Nenhum resultado encontrado."
        />
      </Stack>
    </>
  );
};

export default AsyncSearch;
