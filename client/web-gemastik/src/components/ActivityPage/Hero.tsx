import Image from 'next/image';

export default function Hero() {
	return (
		<div className="bg-gradient-to-r from-[#F3E0CB] to-[#F5F5F5] lg:bg-[url('/ActivityPage/hero-img.png')] bg-no-repeat bg-cover h-[90vh] flex items-center lg:bg-center">
			{/* Content  */}
			<div className='container mx-auto px-4'>
				<div className='flex justify-end text-center lg:text-end'>
					<div>
						<h1 className='text-6xl text-primary-text-black lg:text-text-white font-bold leading-[4rem]'>
							Do It For A Better <br className='hidden lg:block' />
							Future Life
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
