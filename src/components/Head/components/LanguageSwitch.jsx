import React from 'react';
import i18next from 'i18next';

const LanguageSwitch = () => {

  const handleLanguage = () => {
    const actualLng = i18next.language === 'es' ? 'en' : 'es';
    i18next.changeLanguage(actualLng);
  };

  return (
    <>
      <div role='button' className='language-toggle' onClick={handleLanguage}>
        <span className="labels label-en" data-lang="EN" />
        <div className={`language-switch ${i18next.language === 'es' ? '' : 'on'} id='language-switch`} />
        <span className="labels label-es" data-lang="ES" />
      </div>
    </>
  );
};

export default LanguageSwitch;