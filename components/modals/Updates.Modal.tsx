/* REACT, NEXT */
import React, { useEffect, useState, useRef } from 'react';
// import Router, { useRouter } from 'next/router';

/* COMPONENTS */
import UpdatesMessageCard from '../cards/UpdatesMessage.Card';
import SmallButton from '../misc/SmallButton';
import Empty from '../misc/Empty';

/* STYLES */
import styles from './styles/Updates.Modal.module.scss';
import { useTheme } from '../../contexts/Theme';

/* UTILS */

import { UpdatesReturn } from '../../utils/types/Update.Type';
import { User } from '../../utils/types/User.Type';
import { arrow } from '../icons';
import { createNewUpdate } from '../../utils/Mutation/createUpdate.util';
import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from '../../contexts/Auth';

export interface IUpdatesModalProps {
  updates: UpdatesReturn;
  organizer: User;
  close: () => void;
  isSignedUp: boolean;
  matchUpId: string;
}

const UpdatesModal: React.FunctionComponent<IUpdatesModalProps> = (props) => {
  const { colors, shadows, darkMode } = useTheme();
  const [animating, setAnimating] = useState(false);
  const [message, setMessage] = useState<string>('');
  const { currentUserId } = useAuth();
  const queryClient = useQueryClient();
  const divRef = useRef<HTMLDivElement>(null);

  const mutation = useMutation(createNewUpdate, {
    onSuccess: () => queryClient.invalidateQueries(['matchup', props.matchUpId]),
  });

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  function handleSubmit() {
    currentUserId &&
      props.isSignedUp &&
      message &&
      mutation.mutate({
        content: message,
        userId: currentUserId,
        matchUpId: props.matchUpId,
      });
    setMessage('');
  }

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
        {props.updates.items.length === 0 && <Empty text="No updates yet."></Empty>}
        <div className={styles.scrollable}>
          <div ref={divRef}></div>
          {props.updates.items
            .sort((a, b): number => {
              return (
                Math.round(new Date(b.createdAt).getTime() / 1000) - Math.round(new Date(a.createdAt).getTime() / 1000)
              );
            })
            .map((update, index) => {
              return <UpdatesMessageCard key={index} update={update} organizer={props.organizer} />;
            })}
        </div>
        <div className={styles.sendGroup}>
          <input
            value={message}
            onChange={(event) => props.isSignedUp && setMessage(event.target.value)}
            type="text"
            placeholder="Type your message here..."
            className={styles.input}
            style={{
              boxShadow: shadows.small,
              color: colors.text[100],
              borderColor: darkMode ? colors.text[60] : '#DDDDDD',
              outlineColor: colors.primary[80],
            }}
          />
          <div
            onClick={handleSubmit}
            className={styles.button}
            style={{
              backgroundColor: colors.primary[100],
              boxShadow: shadows.medium,
            }}
          >
            <svg
              viewBox={arrow.viewBox}
              width="50px"
              height="50px"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              {arrow.path}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatesModal;
