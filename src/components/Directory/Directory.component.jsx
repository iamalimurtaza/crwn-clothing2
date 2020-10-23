import React from 'react';
import MenuItem from '../MenuItem/MenuItem.component';
import './Directory.styles.scss';
import { sections } from './sections.data';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: sections,
		};
	}
	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...collectionProps }) => (
					<MenuItem key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}
export default Directory;
