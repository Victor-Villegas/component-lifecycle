import React from 'react';

import ImageGallery from './ImageGallery';
import GALLERIES from './Database';
import BugReportIcon from '@material-ui/icons/BugReport';

import {
  Button,
  ButtonGroup,
  IconButton
} from '@material-ui/core';

class CollectionSelector extends React.Component {
  //---------------------------------------------
  // HERE IS MY CONSTRUCTOR (MOUNTING LIFECYCLE)
  //---------------------------------------------
  constructor (props) {
    super(props);

    this.state = { activeCollection: 0, showGallery: true, throwError: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleShowGallery = this.handleShowGallery.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleOnClick (collectionID) {
    this.setState({ activeCollection: collectionID });
  }

  handleShowGallery () {
    this.setState({ showGallery: !this.state.showGallery });
  }

  handleError () {
    this.setState({ throwError: true });
  }

  //---------------------------------------
  // HERE IS MY RENDER (MOUNTING LIFECYCLE)
  //---------------------------------------
  render () {
    if (this.state.throwError) {
      throw new Error('Oh no! Something very bad happened :c');
    }
    
    return (
      <>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" id={'collections'}>
          {GALLERIES.map((gallery, id) => (
            <Button key={`${gallery.id}_${id}`} onClick={() => this.handleOnClick(id)}>{gallery.name}</Button>
          ))}
        </ButtonGroup>

        <Button variant="contained" onClick={this.handleShowGallery}>Hide Gallery</Button>
        <IconButton variant="contained" color={'secondary'} onClick={this.handleError}><BugReportIcon/></IconButton>

        {this.state.showGallery ?
          <ImageGallery collectionID={this.state.activeCollection}/>
          :
          null
        }

      </>
    );
  }
}

export default CollectionSelector;
