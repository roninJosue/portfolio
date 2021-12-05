import React from "react"

const SvgImage = ({svg, alt, cls}) => (
  <img src={svg} alt={alt} className={cls} />
)

export default SvgImage