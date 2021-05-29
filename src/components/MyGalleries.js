import React from 'react';
import CollectionSelector from './CollectionSelector';

import {
  Typography
} from '@material-ui/core';

class MyGalleries extends React.Component {
  render () {
    return (
      <>
        <Typography variant={'h6'} align={'center'} className={'media-title'} color={'secondary'}>
          Select a collection
        </Typography>

        <CollectionSelector/>
      </>
    );
  }
}

export default MyGalleries;
