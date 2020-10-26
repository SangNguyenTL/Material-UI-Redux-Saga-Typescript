import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Helmet } from 'react-helmet'

export type PageProps = {
  title?: string
  children: React.ReactNode
  className: string
}

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
}))

const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = '' }, ref) => {
    const styles = useStyles()
    return (
      <div className={styles.root} ref={ref}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    )
  }
)

export default Page
