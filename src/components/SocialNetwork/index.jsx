import React from 'react'
import {FaGithub, FaLinkedin, SiGmail, FaInstagram} from 'react-icons/all';

const IconLookTable = [
  {
    icon: FaGithub,
    href: 'https://github.com/roninJosue',
    css: 'github'
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/reynaldo-josu%C3%A9-cano-b%C3%A1rcenas-430bb8a6/',
    css: 'linkedin'
  },
  {
    icon: SiGmail,
    href: 'mailto:cano.barcenas.reynaldo@gmail.com',
    css: 'gmail'
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/roninjosue/',
    css: 'instagram'
  }
]

const SocialIcon = ({icon: {href, icon:Icon, css = ''}}) => (
  <a
    rel='noreferrer'
    className='social-networks-icon'
    href={href}
    target='_blank'
  >
    <Icon size={'2.5em'} className={`social-networks-${css}`} />
  </a>
)

const SocialNetwork = () => {
  return(
    <div className='social-networks'>
      {IconLookTable.map(Icon=>{
        return (<SocialIcon icon={Icon} />)
      })}
    </div>
  )
}

export default SocialNetwork