import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import ApiEndpoints from 'src/@api-endpoints'
import { IUser } from 'src/@state/api-models/user'
import axiosInstance from 'src/@state/utils/axios'

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100,
  },
}))

export type ProfileProps = {
  className?: string
  data: IUser
}

const Profile: React.FC<ProfileProps> = ({ className, data: user }) => {
  const classes = useStyles()

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user?.avatar} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {[user?.firstName, user?.lastName].filter(Boolean).join(' ')}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {[user?.city, user?.country].filter(Boolean).join(' ')}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
          onClick={() => {
            axiosInstance
              .post(ApiEndpoints.USER.CONNECT_STRIPE, {
                return_url: 'http://localhost:8000/app/account',
                requestOptions: {
                  business_type: 'individual',
                },
                country: 'SG',
              })
              .then((response) => {
                if (response.data?.data) window.open(response.data.data.url)
              })
          }}
        >
          Connect Stripe
        </Button>
      </CardActions>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  )
}

export default Profile
