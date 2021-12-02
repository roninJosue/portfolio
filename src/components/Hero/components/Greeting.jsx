import React from 'react'
import { nanoid } from 'nanoid';

const Greeting = ({name, text}) => {
  return(
    <>
      <h1 className="hero-title">
        <span className="text-color-main">{name}</span>
      </h1>
      {text.map(t=>{
        return (
          <p className='hero-text' key={nanoid()}>{t}</p>
        )
      })}
      <div>Holi</div>
    </>
  )
}



export default Greeting