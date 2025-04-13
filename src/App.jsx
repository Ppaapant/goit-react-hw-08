import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivatRoute';




const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

export default function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(refreshUser())
}, [dispatch])

const isRefreshing = useSelector(selectIsRefreshing);

return isRefreshing ? (
  <strong>Getting user data please wait...</strong>
) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/tasks"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/tasks" />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute component={<ContactPage />} redirectTo="/login" />
            }/>
        </Routes>
      </Suspense>
    </Layout>
  )
}


