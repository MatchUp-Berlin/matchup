import React from 'react';
import { useTheme } from '../../contexts/Theme';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import SmallButton from '../misc/SmallButton';
import styles from './styles/ParticipantsPreview.Card.module.scss';
import avatar from '../../public/default-avatar.png';

export interface IParticipantsPreviewCardProps {
  users: Pick<User, 'profileImage' | 'id' | 'attended'>[];
  callback: () => void;
  hasFinished: boolean;
  isOrganizer: boolean;
}

const ParticipantsPreviewCard: React.FunctionComponent<
  IParticipantsPreviewCardProps
> = ({ users, callback, hasFinished, isOrganizer }) => {
  console.log(users, 'USERS');
  const { colors } = useTheme();
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.avatarPreview}>
          {users.length == 0 ? (
            <div className={styles.empty}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill={colors.text[60]}
              >
                <path d='M10 12C9.75278 12 9.5111 12.0733 9.30554 12.2107C9.09998 12.348 8.93976 12.5432 8.84516 12.7716C8.75055 13.0001 8.72579 13.2514 8.77402 13.4939C8.82225 13.7363 8.94131 13.9591 9.11612 14.1339C9.29094 14.3087 9.51367 14.4277 9.75614 14.476C9.99862 14.5242 10.25 14.4995 10.4784 14.4049C10.7068 14.3102 10.902 14.15 11.0393 13.9445C11.1767 13.7389 11.25 13.4972 11.25 13.25C11.25 12.9185 11.1183 12.6005 10.8839 12.3661C10.6495 12.1317 10.3315 12 10 12ZM10 10.5C10.2652 10.5 10.5196 10.3946 10.7071 10.2071C10.8946 10.0196 11 9.76522 11 9.5V6.5C11 6.23478 10.8946 5.98043 10.7071 5.79289C10.5196 5.60536 10.2652 5.5 10 5.5C9.73479 5.5 9.48043 5.60536 9.2929 5.79289C9.10536 5.98043 9 6.23478 9 6.5V9.5C9 9.76522 9.10536 10.0196 9.2929 10.2071C9.48043 10.3946 9.73479 10.5 10 10.5ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34874 18.9425 4.80691 17.0678 2.93219C15.1931 1.05746 12.6513 0.00294858 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.1539 14.1544 15.6542 15.6542C14.1544 17.1539 12.121 17.9976 10 18Z' />
              </svg>
              <p style={{ color: colors.text[60] }}>
                No one has signed up yet...
              </p>
            </div>
          ) : (
            users
              .slice(0, 5)
              .map((user) => (
                <Avatar
                  key={user.id}
                  size={'small'}
                  image={user.profileImage || avatar}
                  attended={user.attended || false}
                  highlightable={true}
                />
              ))
          )}
        </div>
        <SmallButton callback={callback} highlight />
      </div>
      {hasFinished && isOrganizer && (
        <p style={{ color: colors.primary[100], marginTop: '5px' }}>
          Open participants view to confirm attendance
        </p>
      )}
    </div>
  );
};

export default ParticipantsPreviewCard;
