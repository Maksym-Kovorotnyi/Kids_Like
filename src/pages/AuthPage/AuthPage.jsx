import AuthForm from 'components/AuthForm/AuthForm';
import AuthPhotos from 'components/AuthPhotos/AuthPhotos';
import React from 'react';
import { AuthBox, AuthWrapper } from './AuthPage.styled';

const AuthPage = () => {
  return (
    <>
      <AuthBox>
        <AuthWrapper>
          <AuthPhotos />
          <div>
            <div>
              <AuthForm />
            </div>
          </div>
        </AuthWrapper>
      </AuthBox>
    </>
  );
};

export default AuthPage;
