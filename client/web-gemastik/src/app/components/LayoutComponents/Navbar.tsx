'use client'

import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle(): void {
  }
  return(
    <nav className="container mx-auto px-4 mt-4 flex lg:items-center flex-col lg:flex-row relative">
      <Image src="/Layout/logo.png" width={70} height={66} alt="Logo" />
      <span className="absolute top-4 right-4 cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
      <div className={`w-full ms-4 ${isOpen ? 'h-40' : 'h-0'} lg:block lg:h-auto overflow-hidden transition-[height] duration-500`}> {/*hidden disini bos */}
        <ul className="flex flex-col lg:flex-row gap-4 text-xl font-bold">
          <li>
            <a className="hover:text-red-500" href="#home">Beranda</a>
          </li>
          <li>
            <a href="#aktivitas">Aktivitas</a>
          </li>
          <li>
            <a href="#pengajuan">Pengajuan</a>
          </li>
          <ul className="flex lg:ms-auto order-first lg:order-last gap-4">
            <li>
              <a href="#masuk">Masuk</a>
            </li>
            <li>
              <a href="#daftar">Daftar</a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  )
}