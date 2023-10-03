'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from './Link';
import RightNavMenu from './RightNavMenu';

export default function Navbar() {
	const checkToggle = useRef<HTMLInputElement>(null);
  const [isHamburger, setIsHamburger] = useState(true)

	// Handle check from other element
	function handleCheckToggle() {
		if (checkToggle.current != null) {
			let curr_value: boolean = checkToggle.current.checked;
			checkToggle.current.checked = !curr_value;
      setIsHamburger(!isHamburger)
		}
	}

	return (
		<>
			<nav className='container mx-auto px-4 mt-4 flex lg:items-center flex-col lg:flex-row relative'>
				<Image src='/Layout/logo.png' width={70} height={66} alt='Logo' />
				<input className='peer hidden' type='checkbox' ref={checkToggle} /> {/* hidden check box */} 
        <span
					className='absolute top-4 right-4 cursor-pointer lg:hidden' onClick={handleCheckToggle}
				>
					<div className={`flex flex-col gap-2 relative ${isHamburger? '' : 'w-[24px] h-[24px]'}`}>
            <div className={`w-8 h-0.5 bg-primary-text-black ${isHamburger? '' : 'rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform'}`}></div>
            <div className={`w-8 h-0.5 bg-primary-text-black ${isHamburger ? '' : 'hidden'}`}></div>
            <div className={`w-8 h-0.5 bg-primary-text-black ${isHamburger? '' : '-rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform'}`}></div>
					</div>
				</span>
				{/* Checkbox to toggle navbar collapsible menu */}
				<div className='w-full ms-4 h-0 peer-checked:h-52 lg:peer-checked:h-auto lg:h-auto overflow-hidden transition-[height] duration-500'>
					{/*hidden disini bos */}
					<ul className='flex flex-col lg:flex-row lg:items-center gap-6 text-xl font-bold'>
						{/* Looping link menu  */}
						{[
							['/', 'Beranda'],
							['/aktivitas', 'Aktivitas'],
							['/pengajuan', 'Pengajuan'],
						].map(([url, title]) => (
							<Link url={url}>{title}</Link>
						))}
						<RightNavMenu />
					</ul>
				</div>
			</nav>
		</>
	);
}
