"use client"
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';

type UrlProps = {
  cod: number;
  link: string;
  descr_nome: string;
};

type AxiosProps = {
  apiBaseUrl: string;
};

const AsyncSearch: React.FC<AxiosProps> = ({ apiBaseUrl }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<UrlProps[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm);

    try {
      const response = await axios.get<UrlProps[]>(`${apiBaseUrl}/${newTerm}`);
      setSearchResults(response.data.sort((a, b) => a.descr_nome.localeCompare(b.descr_nome)));
    } catch (error) {
      console.error('Erro na busca:', error);
    }
  };

  return (
    <div className='w-full my-2 border-b top-full'>
      <Autocomplete
        id="live-search-demo"
        options={searchResults}
        getOptionLabel={(option) => option.descr_nome}
        renderOption={(props, option) => (
          <span {...props}>
            <a href={option.link} target="_blank" rel="noopener noreferrer">
              {option.descr_nome}
            </a>
          </span>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Procure por um serviço"
            onChange={handleInputChange}
          />
        )}
        noOptionsText="Nenhum resultado encontrado."
      />
    </div>
  );
};

export default AsyncSearch;
