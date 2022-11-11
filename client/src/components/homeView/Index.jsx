import React, {useState} from 'react';
import Greeting from '../greeting/Index';
import SearchBar from '../searchbar/Index';
import ApiTable from '../apiTable/Index';

const Index = ({apiResponse, setApiResponse}) => {
  const [sort, setSort] = useState(null);
  const [page, setPage] = useState(null);
  return (
    <>
      <Greeting/>
      <SearchBar setPage={setPage} setSort={setSort} setList={setApiResponse} />
      <ApiTable page={page} setPage={setPage} sort={sort} list={apiResponse} />
    </>
  );
};

export default Index;
