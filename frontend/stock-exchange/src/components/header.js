import React from 'react'
import Search from './search';
import ThemeIcon from "./themeIcon";
const Header = ({name}) => {
  return (
    <>
    <div className='xl:px-32 '>
      
    <h1 className="text-4xl ml-24">{name }</h1>
    <Search />
    </div>
    <ThemeIcon/>
    </>
  );
};

export default Header;
