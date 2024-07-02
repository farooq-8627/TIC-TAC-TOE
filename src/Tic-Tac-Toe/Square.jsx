import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="square h-12 w-12 bg-white rounded-full" onClick={onClick} >
      <div className='text-black'>{value}</div>
    </button>
  );
};

export default Square;