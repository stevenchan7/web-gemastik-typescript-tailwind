'use client';

import { useState } from 'react';
import ActivityCard from '../LandingPage/ActivityCard';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5];

function Items({ currentItems }: { currentItems: number[] }) {
	return (
		<>
			{currentItems &&
				currentItems.map((item) => (
					<div className='basis-full lg:basis-1/5 flex justify-center items-center'>
						<ActivityCard />
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
			<Items currentItems={currentItems} />
			<ReactPaginate
				className='flex'
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default function ActivityListSection() {
	return (
		<div className='container mx-auto px-4'>
			<div className='flex flex-wrap justify-center items-center gap-12'>
				<PaginatedItems itemsPerPage={3} />
			</div>
		</div>
	);
}
