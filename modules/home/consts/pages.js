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
    Icon: <FaHome size="22px" />,
    url: `/#${HOME}`,
    cmpName: HOME
  },
  {
    name: EXPERIENCES,
    isShowOnMobile: true,
    Icon: <FaBriefcase size="22px" />,
    url: `/#${EXPERIENCES}`,
    cmpName: EXPERIENCES
  },
  {
    name: PROJECTS,
    isShowOnMobile: true,
    Icon: <FaCode size="22px" />,
    url: `/#${PROJECTS}`,
    cmpName: PROJECTS
  },
  {
    name: CERTIFICATIONS,
    isShowOnMobile: true,
    Icon: <FaMedal size="22px" />,
    url: `/#${CERTIFICATIONS}`,
    cmpName: CERTIFICATIONS
  },
  {
    name: CONTACTS,
    url: `/#${CONTACTS}`,
    Icon: <FaAddressBook size="22px" />,
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
