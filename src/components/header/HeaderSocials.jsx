import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/anshuman-h/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Anshuman-h" target="_blank"><FaGithub/></a>
      <a href="https://leetcode.com/anshumanshukla21/" target="_blank"><SiLeetcode/></a>
      <a href="https://auth.geeksforgeeks.org/user/anshumanshukla21/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank"><SiGeeksforgeeks/> </a>
    </div>
  )
}

export default HeaderSocials
