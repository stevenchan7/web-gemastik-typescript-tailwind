import Image from 'next/image';

type ActivityCardProps = {
	eventData: {
		title: string;
		venue: string;
		date: string;
		activity: string;
		community: string;
	};
};

export default function ActivityCard({ eventData }: ActivityCardProps) {
	if (!eventData) {
		return;
	}

	const dateString = new Date(eventData.date).toDateString().split(' ');

	return (
		<div className='max-w-[300px] min-h-[275px] border hover:border-2 border-[#D6925C] rounded-xl bg-[#FAEADE] flex flex-wrap overflow-hidden hover:scale-105'>
			<div className='flex h-[155px]'>
				<img className='object-cover h-full' src='/LandingPage/aktivitas-bersih-pantai.png' alt='gambar aktivitas' />
			</div>
			<div className='flex flex-row p-2 h-full'>
				<div className='basis-1/5 text-sm text-center p-2 flex flex-col justify-between gap-2'>
					<p className='font-bold'>{dateString[2]}</p>
					<p className='font-bold text-primary-text-green'>{dateString[1]}</p>
					<p className='text-xs font'>{dateString[3]}</p>
				</div>
				<div className='basis-3/5 flex flex-col justify-between text-sm p-2 font-bold'>
					<p>{eventData.activity}</p>
					<p className='text-primary-text-green'>{eventData.title}</p>
					<p className='text-xs font-normal'>{eventData.venue}</p>
				</div>
				<div className='basis-1/5 flex flex-col justify-evenly items-center py-2'>
					<div>
						<Image src='/Layout/default-user.png' width={30} height={30} alt='foto komunitas' />
					</div>
					<div className='text-[8px] text-center'>
						<span className='font-bold text-primary-text-green'>{eventData.community}</span> Komunitas
					</div>
				</div>
			</div>
		</div>
	);
}
