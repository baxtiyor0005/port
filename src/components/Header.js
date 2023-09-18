import React from 'react';

import { Button } from 'react-scroll';
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto' id='home'>
      <div className='flex justify-between items-center'>

        <a href="#">
          <h1 className='text-gradient btn-link text-[30px] '> Bekchanov B</h1>
        </a>
        {Button}

        <button className='btn btn-sm'>Work with me</button>
      </div>

    </div>

  </header>
};

export default Header;
