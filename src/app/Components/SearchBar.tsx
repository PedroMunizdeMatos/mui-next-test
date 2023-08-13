import React, { useState } from "react";
import { IconButton, TextField, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


interface SearchBarProps {
  onSearch: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <>
        <TextField
        type="text"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}  >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Buscar"
      >
      </TextField>
    </>
  );
};

export default SearchBar;
