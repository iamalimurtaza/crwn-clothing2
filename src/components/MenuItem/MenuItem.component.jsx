import React from 'react';
import './MenuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className='background-image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></div>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NoW</span>
			</div>
		</div>
	);
};
export default MenuItem;
