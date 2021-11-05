import React, {useState} from "react";
import i18next from "i18next";

const LanguageSwitch = () => {
  const [lng, setLng] = useState(false);

  const toggleSwitch = () => {
    const toggle = document.getElementById('language-switch')

    if (!lng) {
      toggle.classList.remove("on")
    } else {
      toggle.classList.add("on")
    }
  }

  const handleLanguage = () => {
    const ln = !lng;
    setLng(!lng)
    toggleSwitch()
    i18next.changeLanguage(ln ? 'en' : 'es')
  }

  return (
    <>
      <div role='button' className="language-toggle" onClick={handleLanguage}>
        <span className="labels label-en" data-lang="en"></span>
        <div className="language-switch on" id="language-switch"></div>
        <span className="labels label-es" data-lang="es"></span>
      </div>
    </>
  )
}

export default LanguageSwitch