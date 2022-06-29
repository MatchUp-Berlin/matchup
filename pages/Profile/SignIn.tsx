import { useState, useEffect, FC } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import background from '../../public/background.png';
import styles from './styles/SignIn.module.scss';

const SignInPage: NextPage = () => {
  const router = useRouter();
  const { authStatus, user } = useAuthenticator((context) => [context.authStatus, context.user]);

  /* LOG IN */
  const [loginError, setLoginError] = useState<string>();
  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target['login-email'].value;
    const password = e.target['login-pw'].value;

    try {
      await Auth.signIn(email, password);
      setLoginError('');
      router.push('/');
    } catch (err) {
      setLoginError('Wrong credentials. Please try again.');
    }
  }

  /* REGISTRATION */
  const [showRegistration, setShowRegistration] = useState(true);
  const [registrationError, setRegistrationError] = useState<string>();
  async function handleRegistration(e) {
    e.preventDefault();
    const username = e.target['registration-email'].value;
    const password = e.target['registration-pw'].value;
    const given_name = e.target['given-name'].value;
    const family_name = e.target['family-name'].value;
    const confirmPassword = e.target['registration-pw-confirm'].value;

    if (password === confirmPassword) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: { email: username, given_name, family_name },
        });
        setRegistrationError('');
        router.push('/');
      } catch (err) {
        setRegistrationError('User could not be registred');
      }
    } else {
      setRegistrationError('Passwords are not matching');
    }
  }

  return (
    <div className={styles.page} style={{ backgroundImage: `url(${background.src})` }}>
      <div style={{ backgroundColor: 'white', borderRadius: '100%', width: '150px', height: '150px' }} />
      {showRegistration ? (
        <form onSubmit={handleRegistration}>
          <input
            className={styles.input}
            type="email"
            name="registration-email"
            placeholder="Your email address"
          ></input>
        </form>
      ) : (
        <form onSubmit={handleLogin}></form>
      )}
    </div>
  );
};
export default SignInPage;
