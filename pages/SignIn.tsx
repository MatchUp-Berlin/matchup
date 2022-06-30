import { useState, useEffect, FC } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import bubble from '../public/bg-bubble.png';
import styles from './styles/SignIn.module.scss';
import { useTheme } from '../contexts/Theme';
import { Button } from '../components/misc';
import Image from 'next/image';

const SignInPage: NextPage = () => {
  const { colors, shadows } = useTheme();
  const router = useRouter();
  const { route } = useAuthenticator((context) => [context.authStatus, context.user]);

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
  const [showRegistration, setShowRegistration] = useState(false);
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

  if (route === 'authenticated') {
    return router.push('/');
  }

  return (
    <div className={styles.page}>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '100%',
          width: '150px',
          height: '150px',
          boxShadow: shadows.small,
        }}
      />
      {showRegistration ? (
        <>
          <h1>Register</h1>
          <form onSubmit={handleRegistration}>
            <input
              className={styles.input}
              type="text"
              name="given-name"
              placeholder="Your first name"
              style={{ boxShadow: shadows.small }}
            ></input>
            <input
              className={styles.input}
              type="text"
              name="family-name"
              placeholder="Your last name"
              style={{ boxShadow: shadows.small }}
            ></input>
            <input
              className={styles.input}
              type="email"
              name="registration-email"
              placeholder="Your email address"
              style={{ boxShadow: shadows.small }}
            ></input>
            <input
              className={styles.input}
              type="password"
              name="registration-pw"
              placeholder="Password"
              style={{ boxShadow: shadows.small }}
            ></input>
            <input
              className={styles.input}
              type="password"
              name="registration-pw-confirm"
              placeholder="Confirm password"
              style={{ boxShadow: shadows.small }}
            ></input>
            {loginError && <p style={{ color: colors.primary[100] }}>{loginError}</p>}
            <Button variant="primary" text="Sign Up" callback={() => {}}></Button>
          </form>
          <p className={styles.bottomText + ' small'}>
            Already have an account?{' '}
            <span onClick={() => setShowRegistration(false)} style={{ color: colors.primary[100] }}>
              Sign in
            </span>
          </p>
        </>
      ) : (
        <>
          <h1>Sign in</h1>
          <form onSubmit={handleLogin}>
            <input
              className={styles.input}
              type="email"
              name="login-email"
              placeholder="Your email address"
              style={{ boxShadow: shadows.small }}
            ></input>
            <input
              className={styles.input}
              type="password"
              name="login-pw"
              placeholder="Password"
              style={{ boxShadow: shadows.small }}
            ></input>
            {registrationError && <p style={{ color: colors.primary[100] }}>{registrationError}</p>}
            <Button variant="primary" text="Sign In" callback={() => {}}></Button>
          </form>
          <p className={styles.bottomText + ' small'}>
            Already have an account?{' '}
            <span onClick={() => setShowRegistration(true)} style={{ color: colors.primary[100] }}>
              Sign up
            </span>
          </p>
        </>
      )}
      <div className={styles.background}>
        <div className={styles.bgBubbleOne}>
          <Image layout="fixed" width="500px" height="500px" src={bubble} alt="background"></Image>
        </div>
        <div className={styles.bgBubbleTwo}>
          <Image layout="fixed" width="500px" height="500px" src={bubble} alt="background"></Image>
        </div>
        <div className={styles.bgBubbleThree}>
          <Image layout="fixed" width="500px" height="500px" src={bubble} alt="background"></Image>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
