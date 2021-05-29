import React from 'react';
import './App.css';

import MyGalleries from './components/MyGalleries';
import CatchError from './components/CatchError';

import {
  Container,
  Typography
} from '@material-ui/core';

class App extends React.Component {
  render () {
    return (

      <>
        <div id={'gallery-title'}>
          <div id={'bigtext'}>
            <Typography variant={'h3'} align={'center'}>
              PHOTO
            </Typography>
            <Typography variant={'h3'} align={'center'} className={'media-title'} color={'primary'}>
              MEDIA
            </Typography>
          </div>
          <Typography variant={'h4'} align={'center'} gutterBottom>
            Your own private gallery
          </Typography>
        </div>

        <Container className="App">
          <CatchError>
            <MyGalleries/>
          </CatchError>
        </Container>
      </>
    );
  }
}

export default App;
