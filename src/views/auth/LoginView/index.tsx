import React, { useCallback, useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core'
import FacebookIcon from 'src/icons/Facebook'
import GoogleIcon from 'src/icons/Google'
import Page from 'src/components/Page'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import useMemoSelector from 'src/@state/utils/use-memo-selector'
import authSelectors from 'src/@state/ducks/auth/selectors'
import { AuthLoginRequest } from 'src/@state/api-models/auth'
import authAction from 'src/@state/ducks/auth/actions'
import useStyles from './styles'

const LoginView: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const { isLogged } = useMemoSelector(authSelectors.root)

  const { loading, errors: errrorsLogin, show } = useMemoSelector(
    authSelectors.getAuthLogin
  )

  const login = (form: AuthLoginRequest) => {
    dispatch(authAction.login.request(form))
  }

  const openErrorSnack = useCallback(
    (isOpen: boolean) => {
      if (isOpen && errrorsLogin)
        enqueueSnackbar(errrorsLogin.message, {
          variant: 'error',
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          preventDuplicate: true,
          onClose: () => dispatch(authAction.clean.login({ show: false })),
        })
    },
    [errrorsLogin, enqueueSnackbar, dispatch]
  )

  useEffect(() => {
    if (isLogged) {
      navigate('/')
    }
    openErrorSnack(show)
  }, [show, isLogged, openErrorSnack, navigate, dispatch])

  return (
    <Page className={classes.root} title="Login">
      <Container className={classes.container} maxWidth="xs">
        <Box className={classes.header}>
          <img
            className={classes.textLogo}
            alt="Ogatlane"
            src="/static/icons/ogatlane-text-logo.png"
          />
        </Box>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Must be a valid email')
              .max(255)
              .required('Email is required'),
            password: Yup.string().max(255).required('Password is required'),
          })}
          onSubmit={login}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Button
                    className={classes.facebookBtn}
                    type="submit"
                    fullWidth
                    size="small"
                    startIcon={<FacebookIcon />}
                    variant="contained"
                  >
                    Sign-in with Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    className={classes.googleBtn}
                    size="small"
                    type="submit"
                    fullWidth
                    startIcon={<GoogleIcon />}
                    variant="contained"
                  >
                    Login with Google
                  </Button>
                </Grid>
              </Grid>
              <Box mt={3} mb={1}>
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  or login with email address
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <Box my={2}>
                <Button
                  color="primary"
                  disabled={loading}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body1">
                Don&apos;t have an account?{' '}
                <Link component={RouterLink} to="/register" variant="h6">
                  Sign up
                </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </Container>
    </Page>
  )
}

export default LoginView
