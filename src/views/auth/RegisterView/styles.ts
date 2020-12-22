import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(8),
    borderRadius: theme.spacing(1),
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  textLogo: {
    width: '150px',
  },
  startIcon: {
    opacity: 0.42,
  },
}))

export default useStyles
