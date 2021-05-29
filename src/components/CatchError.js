import React, { Component } from 'react';

import {
  Typography,
  Button
} from '@material-ui/core';

class CatchError extends Component {
  constructor (props) {
    super(props);

    this.state = { hasError: false, errorMsg: '' };
    this.handleError = this.handleError.bind(this);
  }

  //--------------------------------------
  // HERE IS MY DID CATCH (ERROR HANDLING)
  //--------------------------------------
  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ hasError: true, errorMsg: error.toString() });
  }

  handleError () {
    window.location.reload(true);
  }

  render () {
    if (this.state.hasError) {
      console.log(5);
      return (
        <>
          <Typography variant={'h1'} align={'center'} gutterBottom>
            ERROR FOUND
          </Typography>
          <Typography variant={'h4'} align={'center'} gutterBottom>
            {this.state.errorMsg}
          </Typography>

          <Button variant="contained" onClick={this.handleError}>Refresh page</Button>
        </>
      );
    }

    return (
      this.props.children
    );
  }
}

export default CatchError;
