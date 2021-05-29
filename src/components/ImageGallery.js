import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { gsap } from 'gsap';

import ImageCard from './ImageCard';
import GALLERIES from './Database';
import CloseIcon from '@material-ui/icons/Close';

let saveData;
let gotData = false;

class ImageGallery extends React.Component {
  constructor (props) {
    super(props);

    this.state = { data: [], currentData: [] };
  }

  //--------------------------------------------------------
  // HERE IS MY COMPONENT SHOULD UPDATE (UPDATING LIFECYCLE)
  //--------------------------------------------------------
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    if (JSON.stringify(nextState.currentData) !== JSON.stringify(this.state.currentData)) {
      return true;
    }
    return this.props.collectionID !== nextProps.collectionID;
  }

  _handlerImg (imgID) {
    const newCurrentData = this.state.currentData.filter(image => image.id !== imgID);

    const newData = [];

    for (let i = 0; i < this.state.data.length; i++) {
      if (i === this.props.collectionID) {
        newData.push(newCurrentData);
      } else {
        newData.push(this.state.data[i]);
      }
    }

    this.setState({ data: newData, currentData: newCurrentData });
  }

  render () {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        id={'imgGrid'}
      >
        {this.state.currentData.map((image, id) => (
          <ImageCard key={`${image.id}_${id}`} url={image.download_url} title={image.author}>
            <IconButton key={image.id} className={'eraseImg'}
                        onClick={() => this._handlerImg(image.id)}><CloseIcon/></IconButton>
          </ImageCard>
        ))}
      </Grid>
    );
  }

  //---------------------------------------------------------
  // HERE IS MY COMPONENT WILL UNMOUNT (UNMOUNTING LIFECYCLE)
  //---------------------------------------------------------
  componentWillUnmount () {
    // This saves the current session preventing the app to fetch the data again
    // and load the previous one
    saveData = this.state.data;
  }

  //---------------------------------------------------
  // HERE IS MY COMPONEN DID MOUNT (MOUNTING LIFECYCLE)
  //---------------------------------------------------
  componentDidMount () {
    if (!gotData) {
      Promise.all([
        fetch(GALLERIES[0].url),
        fetch(GALLERIES[1].url)
      ]).then(datas => Promise.all(datas.map(data => data.json())))
        .then(myJson => this.setState({ data: myJson, currentData: myJson[this.props.collectionID] }));

      gotData = true;
    } else {
      this.setState({ data: saveData, currentData: saveData[this.props.collectionID] });
    }
  }

  //-----------------------------------------------------
  // HERE IS MY COMPONENT DID UPDATE (UPDATING LIFECYCLE)
  //-----------------------------------------------------
  componentDidUpdate (prevProps, prevState, snapshot) {
    gsap.from('.imageCard', {
      duration: 1, y: 10, opacity: 0.1, stagger: {
        grid: [7, 15],
        from: 'random',
        amount: 0.5
      }
    });
    this.setState({ currentData: this.state.data[this.props.collectionID] });
  }
}

export default ImageGallery;
