import React, { useEffect } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from '@material-ui/core'
import {
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon,
} from 'react-feather'
import useMemoSelector from 'src/@state/utils/use-memo-selector'
import userSelectors from 'src/@state/ducks/user/selectors'
import NavItem from './NavItem'

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Customers',
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Products',
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings',
  },
]

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}))

export type NavBarProps = {
  openMobile: boolean
  onMobileClose: () => void
}

const NavBar: React.FC<NavBarProps> = ({ onMobileClose, openMobile }) => {
  const classes = useStyles()
  const location = useLocation()

  const {
    profile: { data: user },
  } = useMemoSelector(userSelectors.root)

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [location.pathname, onMobileClose, openMobile])

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user?.avatar}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {[user?.firstName, user?.lastName].filter(Boolean).join(' ')}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user?.role.name}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
}

export default NavBar
