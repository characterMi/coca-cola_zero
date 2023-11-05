import React from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants'
import Logo from "../assets/icon.svg"

const Footer = () => {
  return (
    <footer className='border-t border-[#3e3e3e] mt-10'>
      <div className="flex w-full flex-col gap-14 mt-10">
        <div className="flex flex-col items-start justify-center gap-[1%] md:flex-row">
          <a className='mb-10 mr-10' href="/">
            <img
              src={Logo}
              alt="logo"
              className='h-[100px] xl:h-[150px] object-contain'
            />
          </a>
          <div className="flex flex-wrap gap-6 justify-between md:flex-1">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title} key={column.title}>
                <ul className='regular-14 flex text-[12px] lg:text-[16px] flex-col gap-4 text-gray-30'>
                  {column.links.map((link) => (
                    <a href="/" key={link}>
                      {link}
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <a href="/" key={link.label} className='flex text-[12px] lg:text-[16px] gap-4 md:flex-col lg:flex-row'>
                    <p className='whitespace-nowrap'>
                      {link.label}
                    </p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {link.value}
                    </p>
                  </a>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <a href="/" key={link}>
                      <img
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className='regular-14 w-full text-center py-10 border-t border-[#3e3e3e] text-gray-30'>{new Date().getFullYear()} Coca-Cola | All rights reserved</p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => (
  <div className='flex flex-col gap-5'>
    <h4 className='whitespace-nowrap font-bold text-[20px] sm:text-[24px] text-[#c52644]'>{title}</h4>
    {children}
  </div>
)

export default Footer