import './App.css';
import Header from './components/header';
import CardsList from './components/cardsList';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);

  const updatePage = (increment = true) => {
    if (page === 1 && !increment) return;

    setPage((prevPage) => (increment ? prevPage + 1 : prevPage - 1));
  };

  return (
    <>
      <Header></Header>

      <CardsList page={page} updatePage={updatePage}></CardsList>
    </>
  );
}

export default App;
