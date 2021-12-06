import React from "react"
import { nanoid } from "nanoid";

const SectionContent = ({name, text, ...props}) => {
  return(
    <>
      <h1 className="hero-title">
        <span className="text-color-main">{name}</span>
      </h1>
      <div className="mb-5">
        {text.map(t => {
          return (
            <p className="hero-text" key={nanoid()}>{t}</p>
          );
        })}
      </div>
      {props.children}
    </>
  )
}

export default SectionContent