import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
	const navClasses =
		'border-2 border-gray-600 px-2 py-1 rounded hover:bg-gray-800 hover:border-gray-800 hover:text-white whitespace-nowrap text-md font-bold';

	return (
		<div className='mt-6 h-20 flex flex-wrap justify-between items-center px-12 md:hidden'>
			{props.prev.path === '' ? null : (
				<div className={navClasses}>
					<Link to={props.prev.path}>&larr; {props.prev.name}</Link>
				</div>
			)}
			<div className={navClasses}>
				<Link to={props.next.path}>{props.next.name} &rarr;</Link>
			</div>
		</div>
	);
}

export default Navigation;
