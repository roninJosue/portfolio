import React from 'react'
import {FaGithub, FaLinkedin, SiGmail, FaInstagram} from 'react-icons/all';

const SocialNetwork = () => {
  return(
    <div>
      <FaGithub size={'4rem'} />
      <FaLinkedin size={'4rem'} />
      <SiGmail color={'red'} size={'4rem'} />
      <FaInstagram color={'red'} size={'4rem'} />
    </div>
  )
}

export default SocialNetwork