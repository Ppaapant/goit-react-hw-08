import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react'
import Layout from './components/Layout/Layout'



const HomePage = lazy(() => import ('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const TasksPage = lazy(() => import('./pages/ContactPage/ContactPage'));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<ContactPage/>}/>
        </Routes>
      </Suspense>
    </Layout>
  )
}


