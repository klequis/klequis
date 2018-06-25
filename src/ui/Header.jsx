import React from 'react'
import { withStyles } from '@material-ui/core/styles'

// User
// import iUnderConstruction from './under-construction.jpeg'

const styles = {
  image: {
    flexBasis: '40%',
    maxWidth: 400,
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  introWrapper: {
    flexBasis: '60%',
    backgroundColor: 'orange'
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row nowrap',
    backgroundColor: 'blue',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  pageWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100%',
    backgroundColor: 'gray'
  },
}

const Header = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {/* <img src={iUnderConstruction} alt='header' className={classes.image}/> */}
      </div>
      <div className={classes.introWrapper}>
        intro
      </div>
    </div>
  )
}

export default withStyles(styles)(Header)