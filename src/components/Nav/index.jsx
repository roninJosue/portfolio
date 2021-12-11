import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'gatsby';
import { nanoid } from "nanoid";
import LanguageSwitch from '../Head/components/LanguageSwitch';
import Theme from '../Head/components/Theme';
import useNav from "./hooks/useNav";

const arrLinks = [
  { link: '/', text: 'menu.home' },
  { link: '/education', text: 'menu.education' },
  { link: '/experience', text: 'menu.experience' },
  { link: '/projects', text: 'menu.projects' },
  { link: '/contact', text: 'menu.contact' },
];

const Nav = ({ t }) => {
  const {handleClick, buttonPressed} = useNav()
  return (
    <div>
      <nav className='nav'>
        <ul className='nav-list'>
          {arrLinks.map((link) => {
            return (
              <NavItem key={nanoid()}>
                <NavLink
                  link={link.link}
                  text={t(link.text)}
                />
              </NavItem>
            );
          })}
          <NavItem>
            <Theme
              theme={'dark'}
              handleChange={() => {
              }}
            />
          </NavItem>
          <NavItem>
            <LanguageSwitch />
          </NavItem>
        </ul>
      </nav>
      <NavButton
        onClick={handleClick}
        buttonPressed={buttonPressed}
      />
      <aside className={`aside ${buttonPressed? 'aside__1':''}`}>
        <NavBody t={t} navType='nav-list__aside' />
      </aside>
    </div>
  );
};

const NavItem = (props) => (
  <li className='nav-item'>
    {props.children}
  </li>
)

const NavLink = ({link, text}) => (
  <Link
    className='nav-item-link'
    activeClassName='nav-item__active'
    to={link}
  >
    {text}
  </Link>
)

const NavButton = ({onClick, buttonPressed}) => {
  const activeSideNav = buttonPressed ? 'nav-button-inner__2' : ''
  return (
    <button
      type='button'
      onClick={onClick}
      className='nav-button'
    >
      <div className='nav-button-box'>
        <div className={`nav-button-inner ${activeSideNav}`} />
      </div>
    </button>
  )
}

const NavBody = ({t, navType='nav-list'}) => {
  return(
    <ul className={navType}>
      {arrLinks.map((link) => {
        return (
          <NavItem key={nanoid()}>
            <NavLink
              link={link.link}
              text={t(link.text)}
            />
          </NavItem>
        );
      })}
      <NavItem>
        <Theme
          theme={'dark'}
          handleChange={() => {
          }}
        />
      </NavItem>
      <NavItem>
        <LanguageSwitch />
      </NavItem>
    </ul>
  )
}

export default translate('common')(Nav);
