import { useState, useEffect, FC } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import bubble from '../public/bg-bubble.png';
import styles from './styles/SignIn.module.scss';
import { useTheme } from '../contexts/Theme';
import Image from 'next/image';
import VerificationForm from '../components/forms/Verification.Form';
import SignUpForm from '../components/forms/SignUp.Form';
import SignInForm from '../components/forms/SignIn.Form';
import { useAuth } from '../contexts/Auth';

const SignInPage: NextPage = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const authUtils = useAuth();

  /* ERROR STATES */
  const [loginError, setLoginError] = useState<string>('');
  const [registrationError, setRegistrationError] = useState<string>('');
  const [verificationError, setVerificationError] = useState<string>('');
  const [resendError, setResetError] = useState<string>('');

  /* LOADING STATES */
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const [registrationLoading, setRegistrationLoading] = useState<boolean>(false);
  const [verificationLoading, setVerificationLoading] = useState<boolean>(false);

  /* INPUT STATES */
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [registrationEmail, setRegistrationEmail] = useState<string>('');
  const [registrationFirstName, setRegistrationFirstName] = useState<string>('');
  const [registrationLastName, setRegistrationLastName] = useState<string>('');
  const [registrationPassword, setRegistrationPassword] = useState<string>('');
  const [registrationConfirmPassword, setRegistrationConfirmPassword] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');

  /* COMPONENT VISIBILITY STATE */
  const [currentForm, setCurrentForm] = useState<'login' | 'registration' | 'verification'>('login');

  /* FORM HANDLING */
  async function handleLogin() {
    setLoginLoading(true);
    try {
      const user = await authUtils?.login(loginEmail, loginPassword);
      console.log('handleLogin', user);
      setLoginLoading(false);
      user && router.push('/');
    } catch (err) {
      console.log(err);
      if (err == 'UserNotConfirmedException: User is not confirmed.') setCurrentForm('verification');
      setLoginError('Please check your credentials.');
    }
  }

  async function handleRegistration() {
    setRegistrationLoading(true);
    if (registrationPassword === registrationConfirmPassword) {
      try {
        await authUtils?.signup(
          registrationEmail,
          registrationPassword,
          registrationFirstName,
          registrationLastName
        );
        setRegistrationLoading(false);
        router.reload();
      } catch (err) {
        console.log(err);
        setRegistrationLoading(false);
        setRegistrationError('There has been an error. Please try again.');
      }
    } else {
      setRegistrationLoading(false);
      setRegistrationError('Passwords do not match. Please try again.');
    }
  }

  async function handleVerification() {
    setVerificationLoading(true);
    try {
      await authUtils?.verifyEmail(loginEmail, verificationCode);
      setVerificationLoading(false);
      router.push('/');
    } catch (err) {
      console.log(err);
      setVerificationLoading(false);
      setVerificationError('Error. Please try again.');
    }
  }

  async function resendVerificationCode() {
    try {
      await authUtils?.resendEmailVerififaction(loginEmail);
    } catch (err) {
      console.log(err);
      setResetError('There has been an error resending the code.');
    }
  }

  useEffect(() => {
    if (authUtils?.currentUserId) {
      typeof window !== 'undefined' && router.push('/');
    }
  }, [authUtils]);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.logoWrapper}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 500 500"
            fill={colors.primary[100]}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M250.49,.88c-24.41,0-48.02,3.53-70.34,10.11-17.35,5.1-33.91,12.07-49.48,20.64-12.66,6.97-24.65,15.02-35.86,24.01-14.51,11.64-27.69,24.88-39.27,39.44,5.07,10.17,8.59,20.32,12.29,31.06,3.31,9.5,6.73,19.4,11.34,29.73,9.89,22.21,25.16,46.38,56.01,72.67,45.19,38.51,80.62,44.79,111.89,50.33,28.08,4.98,52.36,9.29,86.47,38.36,32.12,27.37,41.15,49.59,49.88,74.55-12.23,11.38-25.94,21.2-40.79,29.16-9.2-13.09-21.4-26.79-38.21-41.14-45.19-38.49-80.62-44.79-111.89-50.33-28.1-4.98-52.36-9.27-86.47-38.36-30.58-26.03-40.22-47.42-48.62-70.94v-.02c-.96-2.72-1.93-5.47-2.89-8.26-6.8-19.58-14.19-40.89-31.14-64.07-10.93,24.29-18.04,50.61-20.61,78.26v.02c-.7,7.61-1.07,15.32-1.07,23.11,0,136.92,111.6,248.31,248.77,248.31,23.09,0,45.45-3.16,66.68-9.07,17.43-4.83,34.08-11.52,49.75-19.84,13.54-7.18,26.34-15.58,38.24-25.04,14.75-11.72,28.13-25.07,39.88-39.76-3.58-8.1-6.41-16.28-9.38-24.82-3.93-11.37-8.08-23.31-14.17-35.85-9.96-20.52-25.13-42.67-53.18-66.56-45.18-38.51-80.62-44.79-111.87-50.33-28.1-4.98-52.36-9.29-86.48-38.36-34.11-29.07-42.16-52.3-51.5-79.22-.24-.72-.49-1.44-.75-2.15,11.11-10.31,23.42-19.35,36.7-26.89,9.37,13.72,21.95,28.09,39.64,43.17,45.19,38.51,80.62,44.79,111.89,50.33,28.08,4.98,52.36,9.29,86.47,38.36,32.05,27.31,41.11,49.49,49.83,74.39,.57,1.6,1.12,3.22,1.68,4.84,6.84,19.72,14.29,41.18,31.5,64.56,10.96-23.05,18.46-48.03,21.82-74.29,1.35-10.4,2.04-21.02,2.04-31.77C499.27,112.27,387.67,.88,250.49,.88Zm0,443.16c-76.75,0-143.29-44.44-175.17-108.9,43.28,35.52,77.52,41.6,107.85,46.96,28.08,5,52.36,9.29,86.47,38.36,8,6.83,14.58,13.32,20.08,19.63-12.67,2.6-25.8,3.96-39.22,3.96ZM427.19,170.81c-45.19-38.51-80.62-44.79-111.89-50.33-28.1-4.98-52.36-9.29-86.47-38.36-9.3-7.94-16.68-15.44-22.67-22.7,14.25-3.31,29.08-5.07,44.32-5.07,80.81,0,150.3,49.25,179.93,119.26-1.06-.93-2.13-1.86-3.23-2.8Z"
            />
          </svg>
        </div>
        {currentForm === 'verification' && (
          <>
            <h1 style={{ marginBottom: '0', color: '#2d2d2d' }}>Verify</h1>
            <VerificationForm
              isLoading={verificationLoading}
              handleVerification={handleVerification}
              resendCode={resendVerificationCode}
              verificationCode={verificationCode}
              setVerificationCode={setVerificationCode}
              error={verificationError}
              resendError={resendError}
            />
          </>
        )}

        {currentForm === 'registration' && (
          <>
            <h1 style={{ marginBottom: '0', color: '#2d2d2d' }}>Register</h1>
            <SignUpForm
              inputState={{
                registrationEmail,
                registrationFirstName,
                registrationLastName,
                registrationPassword,
                registrationConfirmPassword,
              }}
              setRegistrationEmail={setRegistrationEmail}
              setRegistrationFirstName={setRegistrationFirstName}
              setRegistrationLastName={setRegistrationLastName}
              setRegistrationPassword={setRegistrationPassword}
              setRegistrationConfirmPassword={setRegistrationConfirmPassword}
              handleRegistration={handleRegistration}
              error={registrationError}
              isLoading={registrationLoading}
            />
            <p className={styles.bottomText + ' small'}>
              Already have an account?{' '}
              <span onClick={() => setCurrentForm('login')} style={{ color: colors.primary[100] }}>
                Sign in
              </span>
            </p>
          </>
        )}

        {currentForm === 'login' && (
          <>
            <h1 style={{ marginBottom: '0', color: '#2d2d2d' }}>Sign in</h1>
            <SignInForm
              inputState={{
                loginEmail,
                loginPassword,
              }}
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              handleLogin={handleLogin}
              error={loginError}
              isLoading={loginLoading}
            />
            <p className={styles.bottomText + ' small'}>
              Already have an account?{' '}
              <span onClick={() => setCurrentForm('registration')} style={{ color: colors.primary[100] }}>
                Sign up
              </span>
            </p>
          </>
        )}

        {/* BACKGROUND STYLING */}
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
    </>
  );
};
export default SignInPage;
