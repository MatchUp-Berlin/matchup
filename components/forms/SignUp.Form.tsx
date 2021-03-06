import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import { Button } from '../misc';
import styles from './styles/SignUp.Form.module.scss';

interface IInputState {
  registrationEmail: string;
  registrationFirstName: string;
  registrationLastName: string;
  registrationPassword: string;
  registrationConfirmPassword: string;
}

export interface ISignUpFormProps {
  inputState: IInputState;
  handleRegistration: () => Promise<void>;
  setRegistrationEmail: Dispatch<SetStateAction<string>>;
  setRegistrationFirstName: Dispatch<SetStateAction<string>>;
  setRegistrationLastName: Dispatch<SetStateAction<string>>;
  setRegistrationPassword: Dispatch<SetStateAction<string>>;
  setRegistrationConfirmPassword: Dispatch<SetStateAction<string>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
}

const SignUpForm: React.FunctionComponent<ISignUpFormProps> = (props) => {
  const { shadows, colors } = useTheme();
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          value={props.inputState.registrationFirstName}
          onChange={(e) => {
            props.setError('');
            props.setRegistrationFirstName(e.target.value as string);
          }}
          placeholder="Your first name"
          style={{ outlineColor: colors.primary[80] }}
        ></input>
        <input
          className={styles.input}
          type="text"
          value={props.inputState.registrationLastName}
          onChange={(e) => {
            props.setError('');
            props.setRegistrationLastName(e.target.value as string);
          }}
          placeholder="Your last name"
          style={{ outlineColor: colors.primary[80] }}
        ></input>
        <input
          className={styles.input}
          type="email"
          value={props.inputState.registrationEmail}
          onChange={(e) => {
            props.setError('');
            props.setRegistrationEmail(e.target.value as string);
          }}
          placeholder="Your email address"
          style={{ outlineColor: colors.primary[80] }}
        ></input>
        <input
          className={styles.input}
          type="password"
          value={props.inputState.registrationPassword}
          onChange={(e) => {
            props.setError('');
            props.setRegistrationPassword(e.target.value as string);
          }}
          placeholder="Password"
          style={{ outlineColor: colors.primary[80] }}
        ></input>
        <input
          className={styles.input}
          type="password"
          value={props.inputState.registrationConfirmPassword}
          onChange={(e) => {
            props.setError('');
            props.setRegistrationConfirmPassword(e.target.value as string);
          }}
          placeholder="Confirm password"
          style={{ outlineColor: colors.primary[80] }}
        ></input>
        {props.error && <p style={{ color: colors.primary[100] }}>{props.error}</p>}
        <Button
          disabled={props.isLoading || props.error != ''}
          variant="primary"
          text="Sign Up"
          callback={props.handleRegistration}
        ></Button>
      </div>
    </>
  );
};

export default SignUpForm;
