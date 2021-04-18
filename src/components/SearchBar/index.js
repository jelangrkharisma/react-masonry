import React from 'react';
import {func} from 'prop-types';
import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from './SearchBar.elements';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {gray} from 'utilities/colors';

const SearchBar = ({setSearchKeyword}) => {
  return (
    <SearchBarContainer data-testid={'search-bar'}>
      <SearchIcon icon={faSearch} color={gray.darker} />
      <SearchInput
        placeholder={'search'}
        type={'text'}
        onChange={(evt) => {
          setSearchKeyword(evt.target.value);
        }}
      />
    </SearchBarContainer>
  );
};
SearchBar.propTypes = {
  setSearchKeyword: func,
};
export default SearchBar;
