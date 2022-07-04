import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import { Button } from '../misc';
import styles from './styles/SignIn.Form.module.scss';

interface IInputState {
  loginEmail: string;
  loginPassword: string;
}

export interface ISignInFormProps {
  inputState: IInputState;
  handleLogin: () => Promise<void>;
  setLoginEmail: Dispatch<SetStateAction<string>>;
  setLoginPassword: Dispatch<SetStateAction<string>>;
  error: string;
  isLoading: boolean;
}

const SignInForm: React.FunctionComponent<ISignInFormProps> = (props) => {
  const { colors, shadows } = useTheme();
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="email"
        value={props.inputState.loginEmail}
        onChange={(e) => props.setLoginEmail(e.target.value as string)}
        placeholder="Your email address"
        style={{ boxShadow: shadows.small, outlineColor: colors.primary[80] }}
      ></input>
      <input
        className={styles.input}
        type="password"
        value={props.inputState.loginPassword}
        onChange={(e) => props.setLoginPassword(e.target.value as string)}
        placeholder="Password"
        style={{ boxShadow: shadows.small, outlineColor: colors.primary[80] }}
      ></input>
      {props.error && <p style={{ color: colors.primary[100] }}>{props.error}</p>}
      <Button disabled={props.isLoading} variant="primary" text="Sign In" callback={props.handleLogin}></Button>
    </div>
  );
};

export default SignInForm;
