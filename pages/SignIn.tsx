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

const SignInPage: NextPage = () => {
  const { colors, shadows } = useTheme();
  const router = useRouter();
  const { user } = useAuthenticator((context) => [context.authStatus, context.user]);

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
      await Auth.signIn(loginEmail, loginPassword);
      setLoginLoading(false);
      router.push('/');
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
        await Auth.signUp({
          username: registrationEmail,
          password: registrationPassword,
          attributes: {
            email: registrationEmail,
            given_name: registrationFirstName,
            family_name: registrationLastName,
          },
        });
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
      await Auth.confirmSignUp(loginEmail as string, verificationCode);
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
      await Auth.resendSignUp(loginEmail);
    } catch (err) {
      console.log(err);
      setResetError('There has been an error resending the code.');
    }
  }

  return (
    <>
      <div className={styles.page}>
        {currentForm === 'verification' && (
          <>
            <h1 style={{ marginBottom: '0' }}>Verify</h1>
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
            <h1 style={{ marginBottom: '0' }}>Register</h1>
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
