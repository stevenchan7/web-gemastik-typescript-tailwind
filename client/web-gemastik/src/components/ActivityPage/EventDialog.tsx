'use client';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import ActivityCard from '../LandingPage/ActivityCard';

type EventDialogProps = {
	eventData: {
		title: string;
		venue: string;
		date: string;
		activity: string;
		community: string;
	};
};

export default function EventDialog({ eventData }: EventDialogProps) {
	if (!eventData) {
		return;
	}

	const dateString = new Date(eventData.date).toDateString();

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>
				<button>
					<ActivityCard eventData={eventData} />
				</button>
			</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className='bg-primary-black/70 data-[state=open]:animate-overlayShow fixed inset-0' />
				<AlertDialog.Content className='data-[state=open]:animate-contentShow overflow-y-auto fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-primary-bg p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
					<AlertDialog.Title className='m-0 text-[17px] font-medium'>
						<div>
							<h2 className='text-2xl font-bold'>{eventData.title}</h2>
						</div>
						<div>
							<h3 className='font-semibold text-primary-green'>{eventData.community}</h3>
						</div>
					</AlertDialog.Title>
					<AlertDialog.Description className='mt-4 mb-5 text-[15px] leading-normal'>
						<div className='flex'>
							<div className='basis-1/3'>
								<div>
									<p>Hari</p>
								</div>
								<div>
									<p>Tempat</p>
								</div>
								<div>
									<p>Kuota</p>
								</div>
								<div>
									<p>Agenda kegiatan</p>
								</div>
							</div>
							<div className='basis-2/3'>
								<div>
									<p>: {dateString}</p>
								</div>
								<div>
									<p>: {eventData.venue}</p>
								</div>
								<div>
									<p>: 10</p>
								</div>
								<div>
									<p>: blabla bla blaa blaa blabla bla blaa blaa blabla bla blaa blaa blabla bla blaa blaa blabla bla blaa blaa blabla bla blaa blaa blabla bla blaa blaa blabla bla blaa blaa</p>
								</div>
							</div>
						</div>
					</AlertDialog.Description>
					<div className='flex justify-end gap-[25px]'>
						<AlertDialog.Cancel asChild>
							<button className='bg-primary-black/20 hover:bg-primary-black/50 focus:shadow inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none'>
								Cancel
							</button>
						</AlertDialog.Cancel>
						<AlertDialog.Action asChild>
							<button className='text-primary-white bg-primary-green hover:scale-105 focus:shadow inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none'>
								Yes, delete account
							</button>
						</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
