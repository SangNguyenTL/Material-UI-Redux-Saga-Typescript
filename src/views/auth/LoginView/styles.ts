import { colors, makeStyles } from '@material-ui/core'

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
    marginBottom: theme.spacing(3),
  },
  textLogo: {
    width: '150px',
  },
  startIcon: {
    opacity: 0.42,
  },
  googleBtn: {
    backgroundColor: colors.red[500],
    borderColor: colors.red[500],
    color: colors.common.white,
    '&:hover': {
      backgroundColor: colors.red[400],
      borderColor: colors.red[400],
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: colors.red[400],
      borderColor: colors.red[500],
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2rem ${colors.red[500]}`,
    },
  },
  facebookBtn: {
    backgroundColor: colors.blue[500],
    borderColor: colors.blue[500],
    color: colors.common.white,
    '&:hover': {
      backgroundColor: colors.blue[400],
      borderColor: colors.blue[400],
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: colors.blue[400],
      borderColor: colors.blue[500],
    },
    '&:focus': {
      boxShadow: `0 0 0 0.2rem ${colors.blue[500]}`,
    },
  },
}))

export default useStyles
