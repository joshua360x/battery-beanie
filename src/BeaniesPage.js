import { useEffect, useState } from 'react';
import './App.css';
import { getALLBeanieBabies, getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const [allBennies, setAllBennies] = useState(0);
  const perPage = 500;

  function maxNumber(page, allBeanies, perPage) {
    // const allBeanies = await getALLBeanieBabies();
    const calc = allBeanies / perPage;
    console.log('🚀 ~ file: BeaniesPage.js ~ line 14 ~ maxNumber ~ calc', calc);
    if (page >= calc) {
      console.log('is it true?');
      return true;
    } else {
      console.log('is it false?');
      return false;
    }
    // page > maxNumber() && true
  }

  useEffect(() => {
    async function getAllBeanies() {
      const allBeanies = await getALLBeanieBabies();
      setAllBennies(allBeanies.length);
    }
    getAllBeanies();
  }, []);

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to);

      setBeanieBabies(beanies);
    }

    fetch();
  }, [page, allBennies]); // what can you do with this array to trigger a fetch every time the page changes?

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className="buttons">
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous Page
        </button>
        {/* on click, this button should increment the page in state  */}
        <button disabled={maxNumber(page, allBennies, perPage)} onClick={() => setPage(page + 1)}>
          Next Page
        </button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      <BeaniesList beanieBabies={beanieBabies} />
    </>
  );
}

export default App;
