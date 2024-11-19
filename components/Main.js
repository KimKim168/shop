import React from 'react';

export default function Main(props) {

    const { children } = props;

  return (
    <main className='grid grid-cols-12 '>{ children }</main>
  )
}
