import AuthPage from 'pages/AuthPage/AuthPage';
import AwardPage from 'pages/AwardPage/AwardPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import MainPage from 'pages/MainPage/MainPage';
import PlanningPage from 'pages/PlanningPage/PlanningPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Header/Header';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/Auth/AuthOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/award" element={<AwardPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
