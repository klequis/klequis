import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { 
  Grid,
  Typography,
} from '@material-ui/core'

/* User */
import * as eventsSelectors from 'store/selectors/events-selectors'
import Header from 'ui/Header'
import AppBar from 'ui/AppBar'
// import { green } from 'logger'

const styles = theme => ({
  action: {
    border: 'none',
  },
  image: {
    margin: 'auto',
    width: '100%',
  },
  root: {
    flexGrow: 1,
  },
  pageMock: {
    margin: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    backgroundColor: 'gray',
    height: '100%',
  },
  headerWrap: {
    height: 300,
    
  },
})

class EventGrid extends React.Component {
  state = {
    spacing: '16'
  }



  render() {
    const { classes } = this.props
    return (
      <div className={classes.pageMock}>
        <AppBar />
        <div className={classes.headerWrap}>
          <Header />
        </div>
        
        <Grid container spacing={Number(8)} className={classes.grid1111} >
          
        </Grid>
      </div>
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
