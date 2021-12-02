import React, { useEffect, useState } from 'react';
import i18next from 'i18next';

const LanguageSwitch = () => {
  const [lng, setLng] = useState(i18next.language);
  const [toggle, setToggle] = useState(null)

  useEffect(() => {
    const languageDOM = document.getElementById('language-switch')
    setToggle(languageDOM);
  },[])

/*  useEffect(() => {
    if (toggle){
      if (i18next.language === 'en') {
        //toggle.classList.add('on');
      }
    }
  }, [toggle]);*/

  useEffect(() => {
    toggleSwitch();
  }, [lng])

  const toggleSwitch = () => {

    if (toggle){
      if (lng === 'en') {
        toggle.classList.remove('on');
      } else {
        toggle.classList.add('on');
      }
    }
  };

  const handleLanguage = () => {
    const actualLng = lng === 'es' ? 'en' : 'es';
    i18next.changeLanguage(actualLng);
    setLng(actualLng);
  };

  return (
    <>
      <div role='button' className='language-toggle' onClick={handleLanguage}>
        <span className='labels label-en' data-lang='EN'></span>
        <div className='language-switch on' id='language-switch'></div>
        <span className='labels label-es' data-lang='ES'></span>
      </div>
    </>
  );
};

export default LanguageSwitch;