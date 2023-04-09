import AuthPage from 'pages/AuthPage/AuthPage';
import AwardPage from 'pages/AwardPage/AwardPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import MainPage from 'pages/MainPage/MainPage';
import PlanningPage from 'pages/PlanningPage/PlanningPage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/Auth/AuthOperations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import Header from './Header/Header';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/main"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/planning"
            element={
              <PrivateRoute>
                <PlanningPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/award"
            element={
              <PrivateRoute>
                <AwardPage />
              </PrivateRoute>
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
