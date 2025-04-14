import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

type SearchInputProps = {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
};

export default function SearchInput({ onSearch, search }: SearchInputProps) {
  return (
    <TextField
      id="outlined-basic"
      placeholder="Search anime..."
      fullWidth
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "text.secondary" }} />
            </InputAdornment>
          ),
        },
      }}
      value={search}
      onChange={onSearch}
    />
  );
}
