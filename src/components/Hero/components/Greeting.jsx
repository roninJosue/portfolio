import React from 'react'
import { nanoid } from 'nanoid';
import SocialNetwork from '../../SocialNetwork';

const Greeting = ({name, text}) => {
  return(
    <>
      <h1 className="hero-title">
        <span className="text-color-main">{name}</span>
      </h1>
      <div className='mb-5'>
        {text.map(t=>{
          return (
            <p className='hero-text' key={nanoid()}>{t}</p>
          )
        })}
      </div>
      <SocialNetwork />
    </>
  )
}



export default Greeting