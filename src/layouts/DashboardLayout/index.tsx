import React, { useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import authSelectors from 'src/@state/ducks/auth/selectors'
import userAction from 'src/@state/ducks/user/actions'
import userSelectors from 'src/@state/ducks/user/selectors'
import useMemoSelector from 'src/@state/utils/use-memo-selector'
import NavBar from './NavBar'
import TopBar from './TopBar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

const DashboardLayout: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogged } = useMemoSelector(authSelectors.root)
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const {
    profile: { data: user },
  } = useMemoSelector(userSelectors.root)

  const fetchProfile = useCallback(() => {
    dispatch(userAction.profile.request())
  }, [dispatch])

  useEffect(() => {
    if (!user) fetchProfile()
  }, [user, fetchProfile])

  useEffect(() => {
    if (!isLogged) navigate('/login')
  }, [isLogged, navigate])

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
