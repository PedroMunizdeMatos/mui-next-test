"use client"
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React from 'react';

interface SearchType {
  name: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function AsynchronousSearch() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<SearchType[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('#');
      await sleep(1e3); // For demo purposes.
      const searchResults = await response.json();

      if (active) {
        setOptions(Object.keys(searchResults).map((key) => searchResults[key].item[0]) as SearchType[]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-search"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pesquisar"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
