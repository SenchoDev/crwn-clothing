import React from 'react';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component' 
import { selectColectionsForPreview } from '../../redux/shop/shop.selectors' 

import './collection-overview.styles.scss';

export const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
       {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectColectionsForPreview
  })

export default connect(mapStateToProps)(CollectionsOverview);