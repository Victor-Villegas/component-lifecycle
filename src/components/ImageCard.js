import React from 'react';

import {
  Card,
  Grid,
  CardMedia,
  withStyles
} from '@material-ui/core';

const styles = () => ({
  root: {
    maxWidth: '100%',
    backgroundColor: 'transparent'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  eraseImg: {
    position: 'absolute',
    right: 10
  }
});

class ImageCard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render () {
    const { classes } = this.props;
    return (
      <Grid item xs={6} sm={6} md={4} lg={4} xl={3} className={'imageCard'}>
        {this.props.children}
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={this.props.url}
            title={this.props.title}
          />
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ImageCard);
