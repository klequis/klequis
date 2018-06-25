import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import FA from 'react-fontawesome'

import { Paper, Card, CardMedia, CardContent } from '@material-ui/core'
import { 
  Grid,
  Typography,
} from '@material-ui/core'

/* User */
import * as eventsSelectors from 'store/selectors/events-selectors'
import iUC from './under-construction.jpeg'
// import { green } from 'logger'

const styles = theme => ({
  card: {
    // backgroundColor: 'green',
    width: '100%',
    height: '100%',
  },
  root: {

  },
  g1: {
    backgroundColor: 'black',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  headerWapper: {
    background: 'gray',
    flexBasis: '40%',
    display: 'flex',
    flexFlow: 'row'
  },
  headLeft: {
    backgroundColor: 'orange',
    flexBasis: '50%',
  },
  headRight: {
    backgroundColor: 'green',
    flexBasis: '50%',
  },
  imageBox: {
    // backgroundColor: 'yellow',
    margin: '0',
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
  },
  gridItem: {
    // backgroundColor: 'yellow',
    border: '1px solid red',
  },
  gridHeader: {
    // backgroundColor: 'yellow',
    padding: 0,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  rocket: {
    minHeight: '60px',
    minWidth: '60px',
  },
})

class EventGrid extends React.Component {
  state = {
    spacing: '16'
  }



  render() {
    const { classes } = this.props
    return (
      <Grid container  className={classes.root}>
        <Grid container spacing={0} className={classes.gridHeader}>
          
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={iUC}
              />
              
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardContent>
              <Typography variant="display2" align='center' gutterBottom>
                klequis
              </Typography>
              <Typography variant="display1" align='center' gutterBottom>
                I've been away!
              </Typography>
              <FA name='rocket' size='2x' className={classes.rocket} />
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Grid>
    )
  }
}

EventGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    events: eventsSelectors.getAllEvents(state)
  }
}

export default compose(
  withStyles(styles),
)(EventGrid)


/*

<div className={classes.headerWapper}>
          <div className={classes.headLeft}>
            <div className={classes.imageBox}>
              <img src={iUC} alt='under construction' className={classes.image} />
            </div>
          </div>
          <div className={classes.headRight}>
            right
          </div>
        </div>

*/