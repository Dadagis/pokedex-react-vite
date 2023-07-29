import './Index.css';
import Header from './components/header';
import CardsList from './components/cardsList';
import { useState } from 'react';
import Pagination from './components/pagination';
import SizeSelector from './components/sizeSelector';

function Index() {
  const [page, setPage] = useState(1);
  const [largeDisplay, setLargeDisplay] = useState(false);

  const updatePage = (increment = true) => {
    if (page === 1 && !increment) return;

    setPage((prevPage) => (increment ? prevPage + 1 : prevPage - 1));
  };

  return (
    <>
      <Header></Header>
      <Pagination page={page} handleClick={updatePage}></Pagination>
      <SizeSelector handleClick={setLargeDisplay} />
      <CardsList page={page} largeDisplay={largeDisplay}></CardsList>
      <Pagination page={page} handleClick={updatePage}></Pagination>
    </>
  );
}

export default Index;
