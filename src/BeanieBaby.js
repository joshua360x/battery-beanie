import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    <div className='beanie'>
      <Link>{beanieBaby.title}</Link>
      <img src={beanieBaby.image} alt="" />
    </div>
    // it should also render the beanie baby's image and show the beanie baby's name
    // null
  );
}
