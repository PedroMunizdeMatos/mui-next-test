"use client"
import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

type UrlProps = {
  cod: number;
  link: string;
  descr_nome: string;
};

type AxiosProps = {
  apiBaseUrl: string;
};

const AxiosSearch: React.FC<AxiosProps> = ({ apiBaseUrl }) => {
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
    <>
      <h1>Axios</h1>
      <Stack sx={{ width: 300 }}>
        <Autocomplete
          id="live-search-demo"
          options={searchResults}
          getOptionLabel={(option) => option.descr_nome}
          renderOption={(props, option) => (
            <div {...props}>
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                {option.descr_nome}
              </a>
            </div>
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
        <IconButton sx={{ width: 40 }}>
          <SearchIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default AxiosSearch;
