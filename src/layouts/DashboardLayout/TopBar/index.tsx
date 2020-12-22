import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import Logo from 'src/components/Logo'
import { useDispatch } from 'react-redux'
import authAction from 'src/@state/ducks/auth/actions'
import storage from 'src/@state/utils/localStorage'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: 60,
    height: 60,
  },
}))

export type TopBarProps = {
  className?: string
  onMobileNavOpen?: () => void
}

const TopBar: React.FC<TopBarProps> = ({ className, onMobileNavOpen }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [notifications] = useState([])

  const logout = () => {
    storage.setToken('')
    dispatch(authAction.setLogged(false))
  }

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={logout} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
