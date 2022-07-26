import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { searchedData } from '../redux/movie/movieAPI';

const Header = () => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  const onChange = (e) => {
    setState(e.target.value);
  };
  const inputSearch = () => {
    dispatch(searchedData(state));
    console.log(state);
  };
  return (

    <header>
      <form onSubmit={inputSearch}>

        <input type="search" placeholder="Search here" value={state} onChange={onChange} />
        <button type="submit">searcch</button>
      </form>

    </header>

  );
};
export default Header;
