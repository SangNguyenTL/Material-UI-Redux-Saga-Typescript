import React from 'react'
import { Navigate } from 'react-router-dom'

const DashboardLayout = React.lazy(() => import('src/layouts/DashboardLayout'))
// const MainLayout = React.lazy(() => import('src/layouts/MainLayout'))
const BlankLayout = React.lazy(() => import('src/layouts/BlankLayout'))
const AccountView = React.lazy(() => import('src/views/account/AccountView'))
const CustomerListView = React.lazy(
  () => import('src/views/customer/CustomerListView')
)
const DashboardView = React.lazy(() => import('src/views/DashboardView'))
const ProductListView = React.lazy(
  () => import('src/views/product/ProductListView')
)
const SettingsView = React.lazy(() => import('src/views/settings/SettingsView'))
const LoginView = React.lazy(() => import('src/views/auth/LoginView'))
const RegisterView = React.lazy(() => import('src/views/auth/RegisterView'))
const NotFoundView = React.lazy(() => import('src/views/errors/NotFoundView'))

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]

export default routes
