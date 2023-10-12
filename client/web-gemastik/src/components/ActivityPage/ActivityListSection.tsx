'use client';

import { useState } from 'react';
import EventDialog from './EventDialog';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5];

function Items({ currentItems }: { currentItems: number[] }) {
	// Dummy data
	const eventDummy = {
		title: 'Bersih Pantai Sanur',
		venue: 'Pantai Sanur, Denpasar',
		date: '2023-10-20',
		activity: 'Peduli Pantai',
		community: 'Pecinta Senja',
	};
	return (
		<>
			{currentItems &&
				currentItems.map((item) => (
					<div className='basis-full lg:basis-1/3 xl:basis-1/4 flex justify-center items-center'>
						<EventDialog eventData={eventDummy} />
					</div>
				))}
		</>
	);
}

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
	// Here we use item offsets; we could also use page offsets
	// following the API or data you're working with.
	const [itemOffset, setItemOffset] = useState(0);

	// Simulate fetching items from another resources.
	// (This could be items from props; or items loaded in a local state
	// from an API endpoint with useEffect and useState)
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	// Invoke when user click to request another page.
	const handlePageClick = (event: { selected: number }) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
		setItemOffset(newOffset);
	};

	return (
		<>
			<div className='flex flex-wrap justify-center items-center gap-8 lg:gap-0 xl:gap-12'>
				<Items currentItems={currentItems} />
			</div>
			<ReactPaginate
				className='flex justify-center items-center gap-2 mt-4'
				breakLabel='...'
				// The classname on tag li of each page element.
				pageClassName='w-[24px] h-[24px] bg-[#FAEADE] flex justify-center items-center rounded-full'
				pageLinkClassName='text-xs font-bold text-black/50'
				activeLinkClassName='text-primary-text-black'
				nextLabel='>'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='<'
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default function ActivityListSection() {
	return (
		<div className='container mx-auto mb-24 px-4'>
			<PaginatedItems itemsPerPage={3} />
		</div>
	);
}
