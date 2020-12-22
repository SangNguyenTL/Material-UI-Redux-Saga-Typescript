import { createMuiTheme, colors } from '@material-ui/core'
import shadows from './shadows'
import typography from './typography'

const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.deepPurple[800],
      paper: '#310862',
    },
    primary: {
      main: colors.yellow[700],
    },
    secondary: {
      main: colors.deepPurple[800],
    },
    text: {
      primary: colors.yellow[700],
      secondary: colors.common.white,
    },
  },
  shadows,
  typography,
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: colors.yellow[700],
      },
      root: {
        borderRadius: '2px',
      },
    },
    MuiCheckbox: {
      root: {
        '&checked': {
          color: colors.amber[700],
        },
      },
      colorPrimary: {
        color: colors.amber[700],
      },
    },
  },
})

export default theme
