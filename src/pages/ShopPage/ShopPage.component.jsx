import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component.jsx';
import { collections } from './shop.data.js';
class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: collections,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, ...collectionProps }) => (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}
export default ShopPage;
