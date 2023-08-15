"use client"
import { Autocomplete, Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';


const LiveSearch = () => {
  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    fetch(`https://transparencia.apps.tcu.gov.br/rest/transparencia/servicoPorKeyword/`).then((response) => response.json()).then((json) => setJsonResults(json.data));
  }, []);


  return (
    <>
      <Stack sx={{width: 300}}>
        <Autocomplete 
        id="live-search-demo"
        getOptionLabel={(jsonResults) => `${jsonResults.firstItem} ${jsonResults.lastItem}`}
        options={jsonResults}
        isOptionEqualToValue={(option, value) => option.firstItem === value.firstItem}
        noOptionsText="Não encontrado."
        renderOption={(props, jsonResults) => (
          <Box component="li" {...props} key={jsonResults.id}>
            {jsonResults.firstItem} {jsonResults.lastItem}
          </Box>
        )}
         renderInput={(params) => <TextField {...params}
          label="Procure por um serviço"
          />}
        />
        <IconButton sx={{width:40}}>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Stack>
    </>
  )
}
export default LiveSearch;