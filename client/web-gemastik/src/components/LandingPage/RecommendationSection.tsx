import ActivityCard from './ActivityCard';

export default function RecommendationSection() {
	// Dummy data
	const eventDummy = {
		title: 'Bersih Pantai Sanur',
		venue: 'Pantai Sanur, Denpasar',
		date: '2023-10-20',
		activity: 'Peduli Pantai',
		community: 'Pecinta Senja',
	};

	return (
		<div className='container mx-auto px-4 xl:px-8 my-24'>
			<div className='text-center px-8 mb-4'>
				<h3 className='text-4xl font-black text-primary-green mb-4'>Aktivitas Untuk Kamu</h3>
				<p>Berikut beberapa saran kegiatan yang dapat kamu lakukan</p>
			</div>
			<div className='flex flex-col lg:flex-row justify-evenly items-center gap-y-4 mb-4'>
				<ActivityCard eventData={eventDummy} />
				<ActivityCard eventData={eventDummy} />
				<ActivityCard eventData={eventDummy} />
			</div>
			<div className='px-20 text-end'>
				<a className='text-primary-green font-bold' href='/altivitas'>
					Aktivitas lainnya
				</a>
			</div>
		</div>
	);
}
