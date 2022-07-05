import React, { useEffect, useState } from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Participant.Card.module.scss';
import avatar from '../../public/default-avatar.png';
import { toggleAttendance } from '../../utils/Mutation/toggleAttendance.util';
import { getSignUpByUserIdMatchUpId } from '../../utils/Query/getSignUpByUserIdMatchUpId.util';
import { useQuery, useQueryClient } from 'react-query';
import Link from 'next/link';

export interface IParticipantCardProps {
  user: User;
  attendanceConfirmable?: boolean;
}

const ParticipantCard: React.FunctionComponent<IParticipantCardProps> = ({
  user,
  attendanceConfirmable,
}) => {
  const { profileImage, givenName, familyName, signup, id } = user;
  const { colors, shadows } = useTheme();

  const [attendanceToggled, setAttendanceToggled] = useState<boolean>(false);

  // const { data } = useQuery(['signup', attendanceToggled], () =>
  //   getSignUpByUserIdMatchUpId(id, signup?.matchUpId)
  // );

  const queryClient = useQueryClient();

  const toggleAttended = async () => {
    const signupData = await getSignUpByUserIdMatchUpId(id, signup?.matchUpId);
    console.log('signupData', signupData);
    if (attendanceConfirmable) {
      await toggleAttendance(signupData?.id).then((res) =>
        queryClient.invalidateQueries(['matchup', signupData.matchUpId])
      );
    }
    const signupData2 = await getSignUpByUserIdMatchUpId(id, signup?.matchUpId);
    console.log('signupData2', signupData2);
  };

  console.log('signup', signup);

  return !attendanceConfirmable ? (
    // For Participants Modal
    <Link href={`/Profile/${user.id}`}>
      <div
        className={styles.participantCardWrapper}
        style={{
          backgroundColor: colors.background[80],
          boxShadow: shadows.medium,
        }}
      >
        <div className={styles.info}>
          <p
            className='highlight-1'
            style={{ color: colors.text[100] }}
          >{`${givenName} ${familyName}`}</p>
          {/* <p style={{ color: colors.text[80] }}>{`Participated in ${signups.length} MatchUps`}</p> */}
          <p style={{ color: colors.text[60] }}>
            {signup?.attended ? 'Attendance confirmed' : 'Signed up'}
          </p>
        </div>

        <div className={styles.avatar} onClick={() => toggleAttended()}>
          <Avatar size={'medium'} image={profileImage || avatar} />
        </div>
      </div>
    </Link>
  ) : (
    // For Confirm Attendance Modal
    <div
      onClick={() => toggleAttended()}
      className={styles.participantCardWrapper}
      style={{
        backgroundColor: colors.background[80],
        boxShadow: shadows.medium,
        border: signup?.attended ? `3px solid ${colors.primary[100]}` : 'None',
      }}
    >
      <div className={styles.info}>
        <p
          className='highlight-1'
          style={{ color: colors.text[100] }}
        >{`${givenName} ${familyName}`}</p>
        {/* <p style={{ color: colors.text[80] }}>{`Participated in ${signups.length} MatchUps`}</p> */}
        <p style={{ color: colors.text[60] }}>
          {signup?.attended ? 'Attendance confirmed' : 'Signed up'}
        </p>
      </div>

      <div className={styles.avatar} onClick={() => toggleAttended()}>
        <Avatar size={'medium'} image={profileImage || avatar} />
      </div>
    </div>
  );
};

export default ParticipantCard;
