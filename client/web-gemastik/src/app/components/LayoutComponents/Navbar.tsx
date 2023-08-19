'use client'

import Image from "next/image"
import { useState, useRef } from "react"
import Link from "./Link";
import RightNavMenu from "./RightNavMenu";

export default function Navbar() {
  const checkToggle = useRef<HTMLInputElement>(null);

  // Handle check from other element
  function handleCheckToggle() {
    if (checkToggle.current != null ) {
      let curr_value: boolean = checkToggle.current.checked
      checkToggle.current.checked = !curr_value
    }
  }

  return(
    <>
      <nav className="container mx-auto px-4 mt-4 flex lg:items-center flex-col lg:flex-row relative">
        <Image src="/Layout/logo.png" width={70} height={66} alt="Logo" />
        <span className="absolute top-4 right-4 cursor-pointer lg:hidden" onClick={handleCheckToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
        <input className="peer hidden"  type="checkbox" ref={checkToggle} /> {/* Checkbox to toggle navbar collapsible menu */}
        <div className="w-full ms-4 h-0 peer-checked:h-52 lg:peer-checked:h-auto lg:h-auto overflow-hidden transition-[height] duration-500"> {/*hidden disini bos */}
          <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-xl font-bold">
            {/* Looping link menu  */}
            {
              [['/', 'Beranda'], ['/aktivitas', 'Aktivitas'], ['/pengajuan', 'Pengajuan']].map(([url, title]) => <Link url={url}>{ title }</Link>)
            }
            <RightNavMenu />
          </ul>
        </div>
      </nav>
      {/* <div className={`absolute top-0 right-0 ${ isUserMenuOpen ? 'w-1/4' : 'w-0' } h-screen overflow-hidden bg-slate-500 transition-[height] duration-500`}>
        sdakdsnan
      </div> */}
    </>
  )
}