import React from 'react';
import ApiTableRows from '../apiTableRows/Index'
import TableNavigation from '../tableNavigation/Index'

const Index = ({page, setPage, sort, list }) => {


  const sortedList = () => {
    switch (sort) {
      case 'alphTitleRev':
        return list.sort((a,b) => b.API.localeCompare(a.API));
      case 'alphCat':
        return list.sort((a,b) => a.Category.localeCompare(b.Category));
      case 'alphCatRev':
        return list.sort((a,b) => b.Category.localeCompare(a.Category));
      case 'alphCatRev':
        return list.sort((a,b) => b.Category.localeCompare(a.Category));
      case 'auth':
        return list.sort((a,b) => b.Auth.localeCompare(a.Auth));
      case 'https':
        return list.sort(((a,b) => Number(b.HTTPS) - Number(a.HTTPS)));
      case 'cors':
        return list.sort((a,b) => b.Cors.localeCompare(a.Cors));
      default:
        return list.sort((a,b) => a.API.localeCompare(b.API))
    }
  }

  if(!list.length) {
    return;
  }

  return (
    <>
      <table className="api-table">
        <thead className="api-table__head">
          <tr>
            <th className="api-table__head__title">Title</th>
            <th className="api-table__head__description">Description</th>
            <th>Category</th>
            <th className="api-table__head__th--small">Auth</th>
            <th className="api-table__head__th--small">HTTPS</th>
            <th className="api-table__head__th--small">Cors</th>
            <th className="api-table__head__th--small">Favorite</th>
          </tr>
        </thead>
        <tbody className="api-table__body">
        <ApiTableRows list={sortedList()} page={page}/>
        </tbody>
      </table>

      <TableNavigation list={list} page={page} setPage={setPage} />
    </>
  );
};

export default Index;
