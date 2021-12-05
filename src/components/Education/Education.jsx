import React from "react"
import Section from "../Section/Section";
import GraduationCap from "../../images/graduation.svg"

const Education = () => {
  return(
    <Section
      left={<img src={GraduationCap} alt={'Graduation Cap'}/>}
      right={<h3>aasdsad</h3>}
      sectionId='education'
    />
  )
}

export default Education