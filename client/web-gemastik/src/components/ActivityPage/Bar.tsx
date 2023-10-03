'use client';

import * as Form from '@radix-ui/react-form';

export default function Bar() {
	return (
		<div className='container mx-auto px-4 pb-24'>
			<div className='flex flex-wrap justify-center lg:justify-between items-center gap-4 lg:gap-0'>
				<div className='basis-full lg:basis-1/2 text-center lg:text-start'>
					<h2 className='text-4xl font-bold'>Kegiatan Relawan</h2>
				</div>
				<div className='flex flex-wrap justify-center gap-4'>
					{/* Search bar  */}
					<div className='rounded-full border border-[#D6925C] overflow-hidden'>
						<Form.Root className='flex'>
							<Form.Field name='actName'>
								<Form.Control asChild>
									<input className='outline-0 px-2 h-[40px] rounded-l-full focus:shadow-[inset_0px_0px_1px_0px_#D6925C]' type='text' placeholder='Search' />
								</Form.Control>
							</Form.Field>
							<Form.Submit asChild>
								<div className='w-8 flex justify-center items-center'>
									<button className='w-full h-full flex justify-center items-center bg-primary-bg active:bg-[#F6E7D7]'>
										<img className='active:scale-90' src='/ActivityPage/search-icon.svg' alt='search icon' />
									</button>
								</div>
							</Form.Submit>
						</Form.Root>
					</div>
					{/* Category  */}
					<div>
						<Form.Root>
							<Form.Field name='category'>
								<Form.Control asChild>
									<select className='w-[150px] h-[40px]'>
										<option className='hover:bg-[#D6925C]' value='pantai'>
											pantai
										</option>
										<option className='hover:bg-[#D6925C]' value='hutan'>
											hutan
										</option>
										<option value='gunung'>gunung</option>
									</select>
								</Form.Control>
							</Form.Field>
						</Form.Root>
					</div>
				</div>
			</div>
		</div>
	);
}
