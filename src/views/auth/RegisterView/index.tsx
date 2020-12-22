import React, { useCallback, useEffect } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  InputAdornment,
  Grid,
} from '@material-ui/core'
import Page from 'src/components/Page'
import {
  AlternateEmailOutlined,
  LockOutlined,
  PersonOutline,
} from '@material-ui/icons'
import useMemoSelector from 'src/@state/utils/use-memo-selector'
import { useDispatch } from 'react-redux'
import { AuthRegisterRequest } from 'src/@state/api-models/auth'
import { useSnackbar } from 'notistack'
import authSelectors from 'src/@state/ducks/auth/selectors'
import authAction from 'src/@state/ducks/auth/actions'
import useStyles from './styles'

const RegisterView: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const { isLogged } = useMemoSelector(authSelectors.root)

  const { loading, errors: errrorsRegister, show } = useMemoSelector(
    authSelectors.getAuthRegister
  )

  const register = (registerForm: AuthRegisterRequest) => {
    dispatch(authAction.register.request(registerForm))
  }

  const openErrorSnack = useCallback(
    (isOpen: boolean) => {
      if (isOpen && errrorsRegister)
        enqueueSnackbar(errrorsRegister.message, {
          variant: 'error',
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          preventDuplicate: true,
          onClose: () => dispatch(authAction.clean.register({ show: false })),
        })
    },
    [errrorsRegister, enqueueSnackbar, dispatch]
  )

  useEffect(() => {
    if (isLogged) navigate('/')
    openErrorSnack(show)
  }, [show, isLogged, openErrorSnack, navigate])

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    firstName: Yup.string().max(255).required('First name is required'),
    lastName: Yup.string().max(255).required('Last name is required'),
    password: Yup.string().max(255).required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    policy: Yup.boolean().oneOf([true], 'This field must be checked'),
  })

  return (
    <Page className={classes.root} title="Register">
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
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            policy: false,
          }}
          validationSchema={validationSchema}
          onSubmit={register}
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
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    error={Boolean(touched.firstName && errors.firstName)}
                    fullWidth
                    helperText={touched.firstName && errors.firstName}
                    margin="normal"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutline className={classes.startIcon} />
                        </InputAdornment>
                      ),
                      placeholder: 'First name*',
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    error={Boolean(touched.lastName && errors.lastName)}
                    fullWidth
                    helperText={touched.lastName && errors.lastName}
                    margin="normal"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutline className={classes.startIcon} />
                        </InputAdornment>
                      ),
                      placeholder: 'Last name*',
                    }}
                  />
                </Grid>
              </Grid>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailOutlined className={classes.startIcon} />
                    </InputAdornment>
                  ),
                  placeholder: 'Email*',
                }}
              />
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined className={classes.startIcon} />
                        </InputAdornment>
                      ),
                      placeholder: 'Password*',
                    }}
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    error={Boolean(
                      touched.confirmPassword && errors.confirmPassword
                    )}
                    fullWidth
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    margin="normal"
                    name="confirmPassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.confirmPassword}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined className={classes.startIcon} />
                        </InputAdornment>
                      ),
                      placeholder: 'Cornfirm Password*',
                    }}
                  />
                </Grid>
              </Grid>

              <Box alignItems="center" display="flex" ml={-1}>
                <Checkbox
                  checked={values.policy}
                  name="policy"
                  onChange={handleChange}
                  color="primary"
                />
                <Typography color="textSecondary" variant="body1">
                  I have read the{' '}
                  <Link
                    color="primary"
                    component={RouterLink}
                    to="/"
                    underline="always"
                    variant="h6"
                  >
                    Terms and Conditions
                  </Link>
                </Typography>
              </Box>
              {Boolean(touched.policy && errors.policy) && (
                <FormHelperText error>{errors.policy}</FormHelperText>
              )}
              <Box my={2}>
                <Button
                  color="primary"
                  disabled={loading}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up now
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body1">
                Have an account?{' '}
                <Link component={RouterLink} to="/login" variant="h6">
                  Sign in
                </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </Container>
    </Page>
  )
}

export default RegisterView
