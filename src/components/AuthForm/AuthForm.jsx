import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from 'redux/Auth/AuthOperations';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const user = {
    email: email,
    password: password,
  };

  const handleLogIn = () => {
    dispatch(logInUser(user));
    setEmail('');
    setPassword('');
  };

  const handleRegistration = () => {
    dispatch(registerUser(user));
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h2>Do your homework, get some great prizes!</h2>
      <form>
        <p>Log in with e-mail and password after registering:</p>
        <label>
          Email:
          <input
            placeholder="your@email.com
            "
            onChange={handleChange}
            value={email}
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
            required
          />
        </label>
        <label>
          Password:
          <input
            placeholder="*******"
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            required
          />
        </label>
        <button type="button" onClick={handleLogIn}>
          Log In
        </button>
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </>
  );
};

export default AuthForm;
