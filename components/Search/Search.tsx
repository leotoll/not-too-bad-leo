import { useRef, useState } from 'react'
import {
  InputAdornment,
  TextField,
  MenuItem,
  Select,
  type SelectChangeEvent
} from '@mui/material'
import { debounce } from '@mui/material/utils'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import ClearIcon from '@mui/icons-material/Clear'
import { type GameData } from '../../pages'

const ALL_STUDIOS = 'all'

const selectStyles = {
  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent'
  }
}

interface Props {
  initialGames: GameData[]
  setGames: React.Dispatch<React.SetStateAction<GameData[]>>
  studios: string[]
}

interface Filter {
  studio: string
  name: string
}

const Search = ({
  initialGames,
  setGames,
  studios
}: Props): React.ReactElement => {
  const [filter, setFilter] = useState<Filter>({
    studio: ALL_STUDIOS,
    name: ''
  })
  const inputRef = useRef<HTMLInputElement>()

  const getFilteredGames = (
    nameFilter: string,
    studioFilter: string
  ): GameData[] => {
    return initialGames.filter(({ name, studio }: Filter) => {
      return (
        name.toLowerCase().includes(nameFilter.toLowerCase()) &&
        (studio === studioFilter || studioFilter === ALL_STUDIOS)
      )
    })
  }

  const handleStudioChange = (event: SelectChangeEvent<string>): void => {
    const selectedStudio = event.target.value
    const filteredGames = getFilteredGames(filter.name, selectedStudio)

    setFilter({
      ...filter,
      studio: selectedStudio
    })
    setGames(filteredGames)
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const nameFilter = event.target.value
    const filteredGames = getFilteredGames(nameFilter, filter.studio)

    setFilter({
      ...filter,
      name: nameFilter
    })
    setGames(filteredGames)
  }

  const clearInput = (): void => {
    const inputEl = inputRef.current

    if (inputEl != null) {
      inputEl.value = ''
    }

    setFilter({
      ...filter,
      name: ''
    })
    setGames(getFilteredGames('', filter.studio))
  }

  return (
    <TextField
      inputRef={inputRef}
      size="medium"
      variant="standard"
      placeholder="Search"
      sx={{ width: '100%' }}
      onChange={debounce(handleInputChange, 300)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" disablePointerEvents>
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {Boolean(filter.name) && (
              <ClearIcon
                onClick={clearInput}
                sx={{ mr: 0.5, cursor: 'pointer' }}
              />
            )}
            <Select
              value={filter.studio}
              sx={selectStyles}
              placeholder="All studios"
              variant="standard"
              disableUnderline
              onChange={handleStudioChange}>
              <MenuItem value={ALL_STUDIOS}>All studios</MenuItem>
              {studios.map((studio) => (
                <MenuItem
                  key={studio}
                  value={studio}
                  sx={{ backgroundColor: 'transparent' }}>
                  {studio}
                </MenuItem>
              ))}
            </Select>
          </InputAdornment>
        )
      }}
    />
  )
}

export default Search
