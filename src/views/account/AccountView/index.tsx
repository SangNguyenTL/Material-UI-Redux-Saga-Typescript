import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Page from 'src/components/Page'
import useMemoSelector from 'src/@state/utils/use-memo-selector'
import userSelectors from 'src/@state/ducks/user/selectors'
import Profile from './Profile'
import ProfileDetails from './ProfileDetails'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}))

const Account: React.FC = () => {
  const classes = useStyles()
  const {
    profile: { data, loading },
  } = useMemoSelector(userSelectors.root)

  return (
    <Page
      loading={Boolean(!data) || loading}
      className={classes.root}
      title="Account"
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Profile data={data} />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails data={data} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Account
