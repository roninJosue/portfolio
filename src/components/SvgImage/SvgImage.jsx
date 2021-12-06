import React from "react"

const SvgImage = ({svg, alt, cls = 'svg-image'}) => (
  <div className={cls}>
    <img src={svg} alt={alt} />
  </div>
)

export default SvgImage