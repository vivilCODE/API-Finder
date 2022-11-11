import React from 'react';
import axios from 'axios';
import { evaluateHTTPS, evaluateCors } from '../../utils/evaluateIcon';

const Index = ({ list, page }) => {

  const addFavorite = e => {
    if (!e.target.classList.contains('disabled-btn')) {
      e.target.textContent = 'Added';
      e.target.classList.add('disabled-btn');
      const targetId = e.target.parentElement.parentElement.id;
      const apiObj = list.find(api => api.apiId === targetId);
      axios.post('/api/favorites', apiObj);
    }
  };

  const range = () => {
    return [page * 10, page * 10 + 10];
  };

  return (
    <>
      {list.map(
        ({ API, Description, Category, Auth, HTTPS, Cors, Link, apiId }, index) => {
          if(index >= range()[0] && index < range()[1]) {
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
        }
      )}
    </>
  );
};

export default Index;
