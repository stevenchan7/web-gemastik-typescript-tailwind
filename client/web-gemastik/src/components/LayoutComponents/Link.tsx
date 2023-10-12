export default function Link({ children, url }: { children: string; url: string }) {
	return (
		<li>
			<a className='hover:text-primary-green hover:border-b-4 border-primary-green' href={url}>
				{children}
			</a>
		</li>
	);
}
