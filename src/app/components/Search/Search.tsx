import { SearchProps } from "@/types"
import { FC, ReactElement, useState } from "react"
import { Styles } from "./Styles"
import SearchIcon from "@mui/icons-material/Search"
const Search: FC<SearchProps> = ({ onChange }): ReactElement => {
  const [value, setValue] = useState("")

  return (
    <Styles>
      <div className="search__container">
        <SearchIcon />
        <input
          placeholder="Type here ..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={() => onChange(value)}
        className="search__btn"
      >
        Search
      </button>
    </Styles>
  )
}

export default Search
