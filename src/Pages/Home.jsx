import React from 'react';
import Batch from '../Components/Batch';
import Empower from '../Components/Empower';
import Full from '../Components/Full';
import Baatc from '../Components/Baatc';
import Fetching from '../Components/Fetching';

const Home = () => {
  return (
    <div className='w-full'>
 <Batch/>
      <Empower/>
  <Full/>
  <Baatc/>
<Fetching/>
    </div>
  )
}

export default Home