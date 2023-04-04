import AuthPage from 'pages/AuthPage/AuthPage';
import AwardPage from 'pages/AwardPage/AwardPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import MainPage from 'pages/MainPage/MainPage';
import PlanningPage from 'pages/PlanningPage/PlanningPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/planing" element={<PlanningPage />} />
          <Route path="/award" element={<AwardPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
