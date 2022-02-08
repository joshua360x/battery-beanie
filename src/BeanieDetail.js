import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSingleBeanie } from './services/fetch-utils';

export default function BeanieDetail() {
  // you'll need to track the current beanieBaby in state
  const [currentBeanieBaby, setCurrentBeanieBaby] = useState({});
  // you'll need to get the route param using the appropriate react router hook
  const params = useParams();

  useEffect(() => {
    // you'll need to define a fetch function here (then call it below) that gets this page's beanie baby and injects it into state using the correct state handler
    async function beaniePage() {
      const data = await getSingleBeanie(params.id);
      console.log('🚀 ~ file: BeanieDetail.js ~ line 16 ~ beaniePage ~ data', data);
      setCurrentBeanieBaby(data);
    }

    beaniePage();
  }, [params.id]); // note that you'll want the id from the url in the dependency array because you want the useEffect callback to get called every time the url changes

  function handleBeanieClick() {
    // here's a challenge. How can you link on click to the beanie baby's correct entry in the official beanie baby fan site?
    window.open(`${currentBeanieBaby.link}`);
  }

  return (
    <>
      {/* Feel free to uncomment and use the below code--but you'll need to figure out how to keep it from blowing up on load */}

      <Link to="/">Home</Link>
      <div className="beanie-detail" onClick={handleBeanieClick}>
        {/* <p>{currentBeanieBaby.title}</p> */}
        <div className='beanie-data'>
          <p>{currentBeanieBaby.animal}</p>
          <p>{currentBeanieBaby.title}</p>
          <p>Zodiac: {currentBeanieBaby.astroSign}</p>
          <p> Born on {currentBeanieBaby.birthday}</p>
          <img className='beanie-img' src={currentBeanieBaby.image}/>
          <p>Color: {currentBeanieBaby.color}</p>
          <p>Release Date: {currentBeanieBaby.releaseDate}</p>
          <p>Retirement Date: {currentBeanieBaby.retirementDate}</p>

          <p>Size: {currentBeanieBaby.size}</p>
          <p>Theme: {currentBeanieBaby.theme}</p>
          <p>Sub-Theme: {currentBeanieBaby.subtheme}</p>
          <p>Style Number: {currentBeanieBaby.styleNumber}</p>
          <p>Swing Tag Generation: {currentBeanieBaby.swingTagGeneration}</p>
          <p>Tush Tag Generation: {currentBeanieBaby.tushTagGeneration}</p>
        </div>
      </div>
    </>
  );
}
