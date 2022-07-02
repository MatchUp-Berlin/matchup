import React, { useEffect, useState } from 'react';
import { Update } from '../../utils/types/Update.Type';
import { User } from '../../utils/types/User.Type';
import styles from './styles/Updates.Modal.module.scss';
import { useTheme } from '../../contexts/Theme';
import UpdatesMessageCard from '../cards/UpdatesMessage.Card';
import SmallButton from '../misc/SmallButton';

export interface IUpdatesModalProps {
  updates: Update[];
  organizer: User;
  close: () => void;
}

const UpdatesModal: React.FunctionComponent<IUpdatesModalProps> = (props) => {
  const { colors, shadows, darkMode } = useTheme();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1));
      setAnimating(true);
    })();
  }, []);

  return (
    <>
      <div
        className={styles.updatesModalWrapper}
        style={{
          backgroundColor: colors.background[100],
          borderColor: colors.background[60],
          boxShadow: shadows.medium,
          bottom: animating ? 0 : '-100%',
        }}
      >
        <div>
          <SmallButton
            callback={props.close}
            viewBox="0 0 10 10"
            icon={
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M5.96136 4.99995L8.89318 2.07495C9.02157 1.94656 9.0937 1.77243 9.0937 1.59086C9.0937 1.40929 9.02157 1.23516 8.89318 1.10677C8.76479 0.978378 8.59066 0.90625 8.40909 0.90625C8.22752 0.90625 8.05339 0.978378 7.925 1.10677L5 4.03859L2.075 1.10677C1.94661 0.978378 1.77248 0.90625 1.59091 0.90625C1.40934 0.90625 1.23521 0.978378 1.10682 1.10677C0.978428 1.23516 0.9063 1.40929 0.9063 1.59086C0.9063 1.77243 0.978428 1.94656 1.10682 2.07495L4.03864 4.99995L1.10682 7.92495C1.04291 7.98833 0.992188 8.06374 0.957573 8.14683C0.922958 8.22991 0.905136 8.31903 0.905136 8.40904C0.905136 8.49905 0.922958 8.58817 0.957573 8.67125C0.992188 8.75434 1.04291 8.82975 1.10682 8.89313C1.1702 8.95704 1.24561 9.00776 1.3287 9.04238C1.41178 9.07699 1.5009 9.09481 1.59091 9.09481C1.68092 9.09481 1.77003 9.07699 1.85312 9.04238C1.93621 9.00776 2.01161 8.95704 2.075 8.89313L5 5.96131L7.925 8.89313C7.98838 8.95704 8.06379 9.00776 8.14688 9.04238C8.22996 9.07699 8.31908 9.09481 8.40909 9.09481C8.4991 9.09481 8.58822 9.07699 8.6713 9.04238C8.75439 9.00776 8.8298 8.95704 8.89318 8.89313C8.95709 8.82975 9.00781 8.75434 9.04243 8.67125C9.07704 8.58817 9.09486 8.49905 9.09486 8.40904C9.09486 8.31903 9.07704 8.22991 9.04243 8.14683C9.00781 8.06374 8.95709 7.98833 8.89318 7.92495L5.96136 4.99995Z"
              />
            }
          />
        </div>
        <div className={styles.scrollable}>
          {props.updates.map((update, index) => {
            return <UpdatesMessageCard key={index} update={update} organizer={props.organizer} />;
          })}
        </div>
        <div className={styles.sendGroup}>
          <input
            type="text"
            placeholder="Type your message here..."
            className={styles.input}
            style={{
              backgroundColor: colors.background[80],
              boxShadow: darkMode ? shadows.medium : shadows.small,
              color: colors.text[100],
            }}
          />
          <div
            onClick={() => console.log('clicked')}
            className={styles.button}
            style={{
              backgroundColor: colors.primary[100],
              boxShadow: shadows.medium,
            }}
          >
            <svg viewBox="0 0 20 20" fill={colors.background[100]}>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M18.3393 7.31427L4.33927 0.314269C3.78676 0.0392781 3.16289 -0.0586206 2.55271 0.0339206C1.94252 0.126462 1.37573 0.404939 0.929602 0.831385C0.483474 1.25783 0.179724 1.81149 0.0597636 2.41688C-0.0601964 3.02227 0.00947219 3.64992 0.259271 4.21427L2.65927 9.58427C2.71373 9.7141 2.74177 9.85348 2.74177 9.99427C2.74177 10.1351 2.71373 10.2744 2.65927 10.4043L0.259271 15.7743C0.055971 16.231 -0.0299735 16.7313 0.00924794 17.2296C0.0484693 17.728 0.211613 18.2087 0.483853 18.628C0.756092 19.0473 1.1288 19.3919 1.56809 19.6305C2.00739 19.8691 2.49935 19.9941 2.99927 19.9943C3.4675 19.9896 3.92876 19.8803 4.34927 19.6743L18.3493 12.6743C18.8459 12.4245 19.2633 12.0416 19.555 11.5683C19.8466 11.0951 20.0011 10.5502 20.0011 9.99427C20.0011 9.43838 19.8466 8.89342 19.555 8.42019C19.2633 7.94696 18.8459 7.56408 18.3493 7.31427H18.3393ZM17.4493 10.8843L3.44927 17.8843C3.26543 17.9725 3.059 18.0025 2.85766 17.9701C2.65631 17.9377 2.46968 17.8446 2.32278 17.7031C2.17589 17.5617 2.07575 17.3787 2.0358 17.1787C1.99585 16.9787 2.018 16.7713 2.09927 16.5843L4.48927 11.2143C4.52021 11.1426 4.54692 11.0691 4.56927 10.9943H11.4593C11.7245 10.9943 11.9788 10.8889 12.1664 10.7014C12.3539 10.5138 12.4593 10.2595 12.4593 9.99427C12.4593 9.72905 12.3539 9.4747 12.1664 9.28716C11.9788 9.09963 11.7245 8.99427 11.4593 8.99427H4.56927C4.54692 8.91944 4.52021 8.84598 4.48927 8.77427L2.09927 3.40427C2.018 3.21723 1.99585 3.00982 2.0358 2.80984C2.07575 2.60986 2.17589 2.42687 2.32278 2.28542C2.46968 2.14396 2.65631 2.0508 2.85766 2.01842C3.059 1.98604 3.26543 2.016 3.44927 2.10427L17.4493 9.10427C17.6131 9.18819 17.7505 9.31568 17.8465 9.47271C17.9425 9.62975 17.9933 9.81022 17.9933 9.99427C17.9933 10.1783 17.9425 10.3588 17.8465 10.5158C17.7505 10.6729 17.6131 10.8004 17.4493 10.8843Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatesModal;
