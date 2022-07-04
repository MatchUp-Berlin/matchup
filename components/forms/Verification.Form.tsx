import React, { Dispatch, SetStateAction } from 'react';
import { useTheme } from '../../contexts/Theme';
import { Button } from '../misc';
import styles from './styles/Verification.Form.module.scss';

export interface IVerificationFormProps {
  handleVerification: () => void;
  resendCode: () => void;
  isLoading: boolean;
  verificationCode: string;
  setVerificationCode: Dispatch<SetStateAction<string>>;
  error: string;
  resendError: string;
}

const VerificationForm: React.FunctionComponent<IVerificationFormProps> = (props) => {
  const { colors } = useTheme();
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => props.setVerificationCode(e.target.value as string)}
          value={props.verificationCode}
          placeholder="Type in your verification code"
          style={{ outlineColor: colors.primary[80] }}
        ></input>
        {props.error && <p style={{ color: colors.primary[100] }}>{props.error}</p>}
        <Button disabled={props.isLoading} variant="primary" text="Verify" callback={props.handleVerification}></Button>
      </div>
      <p className={styles.bottomText + ' small'} onClick={props.resendCode}>
        Resend code{' '}
      </p>
      {props.resendError && (
        <p className={styles.bottomText + ' small'} onClick={props.resendCode}>
          {props.resendError}
        </p>
      )}
    </>
  );
};

export default VerificationForm;
