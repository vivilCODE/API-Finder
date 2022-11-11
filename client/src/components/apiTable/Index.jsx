import React from 'react';
import axios from 'axios';

import { evaluateHTTPS, evaluateCors } from '../../utils/evaluateIcon';

const Index = ({sort, list }) => {
  const addFavorite = e => {
    if (!e.target.classList.contains('disabled-btn')) {
      e.target.textContent = 'Added';
      e.target.classList.add('disabled-btn');
      const targetId = e.target.parentElement.parentElement.id;
      const apiObj = list.find(api => api.apiId === targetId);
      axios.post('/api/favorites', apiObj);
    }
  };

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
          {sortedList()?.map(
            ({
              API,
              Description,
              Category,
              Auth,
              HTTPS,
              Cors,
              Link,
              apiId,
            }) => {
              return (
                <tr id={apiId}>
                  <td className="api-table__body__title">
                    <a href={Link}>{API}</a>
                  </td>
                  <td>{Description}</td>
                  <td>{Category}</td>
                  <td className="api-table__body__small-cell">{Auth || '-'}</td>
                  <td className="api-table__body__small-cell">
                    {evaluateHTTPS(HTTPS)}
                  </td>
                  <td className="api-table__body__small-cell">
                    {evaluateCors(Cors)}
                  </td>
                  <td className="api-table__body__small-cell">
                    <span className="favorite-button" onClick={addFavorite}>
                      Add
                    </span>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

export default Index;
