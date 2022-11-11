import React, { createRef } from 'react';
import { htmlOptions } from './categories';
import axios from 'axios';
import searchicon from '../../images/search-icon.png';

const getQuery = (title, category) => {
  return `?title=${title}&category=${category}`;
}

const Index = ({setSort, setList}) => {
  const titleInput = createRef(null);
  const categoryInput = createRef(null);


  const fetchData = e => {
    e.preventDefault();
    const query = getQuery(
      titleInput.current.value,
      categoryInput.current.value
    );
    axios
      .post(`/api/search`, { query: query })
      .then(res => setList(res.data));
  };
  const changeSort = (e) => {
    setSort(e.target.value);
  }

  return (
    <div className="search-bar">
      <form className='search-bar__form' onSubmit={fetchData}>
        <button className='search-bar__form__submit' type="submit">
            <img src={searchicon} alt='Magnifying glass, search icon'/>
        </button>
        <input className='search-bar__form__title' ref={titleInput} type="text" placeholder="Search Title..." />
        <select className='search-bar__form__category' ref={categoryInput}>
        <option value="" disabled selected>Category</option>
        <option value="">Any</option>
            {htmlOptions}</select>
      </form>

      <form>
        <label className='sort-by__label' htmlFor="sort-by">Sort by:</label>
      <select id="sort-by" onChange={changeSort} className='search-bar__sort'>
        <option value="alphTitle">Title A-Z</option>
        <option value="alphTitleRev">Title Z-A</option>
        <option value="alphCat">Category A-Z</option>
        <option value="alphCatRev">Category Z-A</option>
        <option value="auth">Authentication</option>
        <option value="https">HTTPS</option>
        <option value="cors">Cors</option>
      </select>
      </form>
    </div>
  );
};

export default Index;
