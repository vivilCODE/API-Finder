import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { evaluateHTTPS, evaluateCors } from '../../utils/evaluateIcon';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/favorites').then(res => setFavorites(res.data));
    setLoading(false);
  }, []);

  const removeApi = e => {
    const targetId = e.target.parentElement.id;
    axios
      .delete('/api/favorites', { data: { targetId } })
      .then(res => setFavorites(res.data));
  };

  if (loading) {
    return 'Nothing to show here :(';
  }

  return (
    <>
      <h1 className="favorites-header">
        All your favorite API's, in one place.
      </h1>
      <ul className="favorites-list">
        {favorites?.map(
          (
            { API, Description, Category, Auth, HTTPS, Cors, Link, apiId },
            index
          ) => {
            return (
              <li key={index} id={apiId} className="favorites-list__item">
                <h2 className="favorites-list__item__title">{API}</h2>
                <span className="favorites-list__item__category">
                  {Category}
                </span>
                <div className="favorites-list__separator" />
                <p className="favorites-list__item__desc">{Description}</p>
                <table className="favorites-list__table">
                  <thead>
                    <tr>
                      <th>Authentication</th>
                      <th className="center">HTTPS</th>
                      <th className="center">Cors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{Auth || 'None'}</td>
                      <td className="center">{evaluateHTTPS(HTTPS)}</td>
                      <td className="center">{evaluateCors(Cors)}</td>
                    </tr>
                  </tbody>
                </table>
                <a className="favorites-list__item__link" href={Link}>
                  Go to API
                </a>
                <button
                  className="favorites-list__item__remove"
                  onClick={removeApi}
                >
                  Remove Favorite
                </button>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default Index;
