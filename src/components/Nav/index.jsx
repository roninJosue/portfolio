import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'gatsby';
import LanguageSwitch from '../Head/components/LanguageSwitch';
import Theme from '../Head/components/Theme';

const arrLinks = [
  { link: '/', text: 'menu.home' },
  { link: '/education', text: 'menu.education' },
  { link: '/projects', text: 'menu.projects' },
  { link: '/contact', text: 'menu.contact' },
];

const Nav = ({ t }) => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        {arrLinks.map((link) => {
          return (
            <li className='nav-item' key={link.link}>
              <Link
                className='nav-item-link'
                activeClassName='nav-item__active'
                to={link.link}
              >
                {t(link.text)}
              </Link>
            </li>
          );
        })}
        <li className='nav-item'>
          <Theme
            theme={'dark'}
            handleChange={() => {
            }}
          />
        </li>
        <li className='nav-item'>
          <LanguageSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default translate('common')(Nav);
