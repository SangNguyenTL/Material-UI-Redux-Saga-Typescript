import React from 'react'
import { Helmet } from 'react-helmet'
import Loadding from './Loading'

export type PageProps = {
  title?: string
  children: React.ReactNode
  className?: string
  loading?: boolean
}

const Page: React.FC<PageProps> = ({
  loading,
  className,
  children,
  title = '',
}) => {
  return (
    <div className={className}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {!loading ? children : <Loadding />}
    </div>
  )
}

export default Page
