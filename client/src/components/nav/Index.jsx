import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <nav className="top-nav">
      <span className="top-nav__title">AMS JSFS 2022 - HACK DAY</span>
      <ul className="top-nav__list">
        <li>
          <NavLink to="/">Search API's</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">My Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Index;
