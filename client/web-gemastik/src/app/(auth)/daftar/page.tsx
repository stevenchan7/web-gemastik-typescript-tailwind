'use client';

import SignupForm from '@/components/Auth/SignupForm';
import { useState } from 'react';
import { Alert, ErrorAlert } from '@/components/Auth/Alert';

export default function RegisterPage() {
	const [alert, setAlert] = useState<JSX.Element | null>(null);

	const setSuccessAlert = () => {
		setAlert(Alert);
	};
	const setErrorAlert = (msg: string) => {
		setAlert(ErrorAlert(msg));
	};

	return (
		<div className='container mx-auto my-24 px-8 flex flex-col lg:flex-row justify-center items-center lg:items-start'>
			<div className='basis-1/2 my-8 lg:my-0 lg:pe-4'>
				<p className='text-5xl text-center lg:text-start font-black'>
					It’s Our <span className='text-primary-text-green'>Responsibility</span> to Keep Earth Clean and Healthy
				</p>
			</div>

			<div>
				{alert}
				<div className='flex flex-col p-8 min-h-[625px] max-w-[500px] bg-[#FAEADE] border-4 border-[#D6925C] rounded-[32px] shadow-[7px_7px_7px_0_rgba(0,0,0,0.3)]'>
					<div className='mb-8'>
						<h2 className='text-4xl font-bold mb-12'>
							Ayo Menjadi <span className='text-primary-text-green'>Relawan</span>
						</h2>
						<p className='text-lg font-bold text-primary-text-black/60'>Bergabung bersama kami sebagai relawan bumi. Masukkan identitas sesuai formulir di bawah dan jadilah bagian dari kami!</p>
					</div>
					<div>
						<SignupForm setSuccessAlert={setSuccessAlert} setErrorAlert={setErrorAlert} />
					</div>
				</div>
			</div>
		</div>
	);
}
