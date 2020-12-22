import React from 'react'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}))

const MainLayout: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Outlet />
    </div>
  )
}

export default MainLayout
