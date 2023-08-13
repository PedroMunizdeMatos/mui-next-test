"use client"
import { Autocomplete, Box, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';


const LiveSearch = () => {
  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/players").then((response) => response.json()).then((json) => setJsonResults(json.data));
  }, []);


  return (
    <>
      <Stack sx={{width: 300}}>
        <Autocomplete 
        id="live-search-demo"
        getOptionLabel={(jsonResults) => `${jsonResults.first_name} ${jsonResults.last_name}`}
        options={jsonResults}
        isOptionEqualToValue={(option, value) => option.first_name === value.first_name}
        noOptionsText="Não encontrado."
        renderOption={(props, jsonResults) => (
          <Box component="li" {...props} key={jsonResults.id}>
            {jsonResults.first_name} {jsonResults.last_name}
          </Box>
        )}
         renderInput={(params) => <TextField {...params}
          label="Procure por um serviço"
          />}
        />
      </Stack>
    </>
  )
}
export default LiveSearch;