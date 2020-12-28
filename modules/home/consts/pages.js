import React from 'react'
import {
  FaHome,
  FaBriefcase,
  FaAddressBook,
  FaMedal,
  FaCode
} from 'react-icons/fa'

export const HOME = 'Home'
export const ABOUT = 'About'
export const EXPERIENCES = 'Experiences'
export const CERTIFICATIONS = 'Certifications'
export const PROJECTS = 'Projects'
export const CONTACTS = 'Contacts'
export const BLOG = 'Blogs'

export const PAGE_LIST = [
  {
    name: HOME,
    isShowOnMobile: true,
    Icon: <FaHome size="23px" />,
    url: `/#${HOME}`,
    cmpName: HOME
  },
  {
    name: EXPERIENCES,
    isShowOnMobile: true,
    Icon: <FaBriefcase size="23px" />,
    url: `/#${EXPERIENCES}`,
    cmpName: EXPERIENCES
  },
  {
    name: PROJECTS,
    isShowOnMobile: true,
    Icon: <FaCode size="23px" />,
    url: `/#${PROJECTS}`,
    cmpName: PROJECTS
  },
  {
    name: CERTIFICATIONS,
    isShowOnMobile: true,
    Icon: <FaMedal size="23px" />,
    url: `/#${CERTIFICATIONS}`,
    cmpName: CERTIFICATIONS
  },
  {
    name: CONTACTS,
    url: `/#${CONTACTS}`,
    Icon: <FaAddressBook size="23px" />,
    isShowOnMobile: true,
    cmpName: CONTACTS
  },
  {
    name: BLOG,
    isShowOnMobile: false,
    url: `/blogs`,
    cmpName: 'blogs'
  }
]
