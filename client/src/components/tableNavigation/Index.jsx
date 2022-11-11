import React from 'react';

const Index = ({ list, page, setPage }) => {
  const totalPages = Math.ceil(list.length / 10);

  const range = () => {
    return [page * 10, page * 10 + 10];
  };

  const prevPage = e => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page !== totalPages - 1) {
      setPage(page + 1);
    }
  };

  const firstPage = () => {
    setPage(0);
  };
  const lastPage = () => {
    setPage(totalPages - 1);
  };

  if (!list.length) {
    return;
  }

  return (
    <nav className="table-navigation">
      <button className="table-navigation__button" onClick={firstPage}>
        First
      </button>
      <button className="table-navigation__button primary" onClick={prevPage}>
        Back
      </button>
      <div>
        <span className="table-navigation__results">
          Results {range()[0] + 1}-
          {range()[1] > list.length ? list.length : range()[1]}/{list.length}
        </span>
        <div className="table-navigation__divider"></div>
        <span className="table-navigation__page">
          Page {page + 1}/{totalPages}
        </span>
      </div>
      <button className="table-navigation__button primary" onClick={nextPage}>
        Next
      </button>
      <button className="table-navigation__button" onClick={lastPage}>
        Last
      </button>
    </nav>
  );
};

export default Index;
