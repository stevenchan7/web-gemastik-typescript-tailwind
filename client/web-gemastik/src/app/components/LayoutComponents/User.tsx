import Image from "next/image";
import { useState } from "react";


export default function User() {
  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
    <div className="lg:ms-auto order-first lg:order-last">
      <div className="rounded-full overflow-hidden cursor-pointer" onClick={() => setIsOpen(true)}>
        <Image src='/Layout/default-user.png' width={40} height={40} alt='User Photo' />
      </div>
    </div>
    {/* User offcanvas menu  */}
    <div className={`flex justify-end item-center ${ isOpen ? 'w-screen' : 'w-0' } overflow-hidden fixed top-0 right-0 h-screen bg-slate-700/25`}>
      <div className="grow" onClick={() => setIsOpen(false)} /> {/* Blank space is clickable to close offcanvas */}
      <div className={`flex flex-col justify-start item-start p-4 gap-4 text-base ${ isOpen ? 'w-60' : 'w-0' } h-screen overflow-hidden bg-slate-500 transition-[width] duration-500`}>
        <div className="rounded-full overflow-hidden cursor-pointer" onClick={() => setIsOpen(false)}>
          <Image src='/Layout/default-user.png' width={40} height={40} alt='User Photo' />
        </div>
        <button className="ps-2 text-start rounded-md hover:bg-red-600 hover:text-slate-50">
          Keluar
        </button>
      </div>
    </div>
    </>
  )
}