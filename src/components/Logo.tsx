import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
  logo: {
    width: 40,
    height: 40,
  },
}))

const Logo: React.FC = (props) => {
  const classes = useStyles()
  return (
    <img
      className={classes.logo}
      alt="Ogatlane"
      src="/static/icons/icon-64x64.png"
      {...props}
    />
  )
}

export default Logo
