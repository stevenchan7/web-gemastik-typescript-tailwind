'use client'

import Image from "next/image"
import { useState } from "react"
import Link from "./Link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <nav className="container mx-auto px-4 mt-4 flex lg:items-center flex-col lg:flex-row relative">
      <Image src="/Layout/logo.png" width={70} height={66} alt="Logo" />
      <span className="absolute top-4 right-4 cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
      <div className={`w-full ms-4 ${isOpen ? 'h-52' : 'h-0'} lg:h-auto overflow-hidden transition-[height] duration-500`}> {/*hidden disini bos */}
        <ul className="flex flex-col lg:flex-row lg:items-center gap-6 text-xl font-bold">
          {/* Looping link menu  */}
          {
            [['/', 'Beranda'], ['/aktivitas', 'Aktivitas'], ['/pengajuan', 'Pengajuan']].map(([url, title]) => <Link url={url}>{ title }</Link>)
          }
          <ul className="flex lg:ms-auto items-center order-first lg:order-last gap-6">
            <Link url="/masuk">Masuk</Link>
            <li className="bg-primary-text-green hover:bg-primary-text-green/75 px-4 py-2 rounded-lg">
              <a className="text-[#FFF6EC]" href="#daftar">Daftar</a>
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  )
}