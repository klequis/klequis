import React, { Fragment } from 'react'
// User
import Home from 'ui/Home'
import withRoot from './withRoot'
import AppBar from './AppBar'
const style = {
  // height: '9%',
  // backgroundColor: 'white',
}
const App = () => {
  return (
    <div>
      {/* <AppBar /> */}
      <Home />
    </div>

  )
}



export default withRoot(App)
