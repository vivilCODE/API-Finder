import React, {useState} from 'react';
import Greeting from '../greeting/Index';
import SearchBar from '../searchbar/Index';
import ApiList from '../apiTable/Index';

const Index = ({apiResponse, setApiResponse}) => {
  const [sort, setSort] = useState(null);
  return (
    <>
      <Greeting/>
      <SearchBar setSort={setSort} setList={setApiResponse} />
      <ApiList sort={sort} list={apiResponse} />
    </>
  );
};

export default Index;
