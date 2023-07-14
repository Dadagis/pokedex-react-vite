import './App.css';
import Header from './components/header';
import CardsList from './components/cardsList';
import { useState } from 'react';
import Pagination from './components/pagination';

function App() {
  const [page, setPage] = useState(1);

  const updatePage = (increment = true) => {
    if (page === 1 && !increment) return;

    setPage((prevPage) => (increment ? prevPage + 1 : prevPage - 1));
  };

  return (
    <>
      <Header></Header>
      <Pagination page={page} handleClick={updatePage}></Pagination>
      <CardsList page={page}></CardsList>
      <Pagination page={page} handleClick={updatePage}></Pagination>
    </>
  );
}

export default App;
