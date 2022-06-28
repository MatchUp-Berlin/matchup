import React from 'react';
import { User } from '../../utils/types/User.Type';
import { Avatar } from '../misc';
import { useTheme } from '../../contexts/Theme';

export interface IParticipantCardProps {
  user: User;
}

const ParticipantCard: React.FunctionComponent<IParticipantCardProps> = ({
  user,
}) => {
  const { profileImage, givenName, familyName, matchUps } = user;
  const { colors } = useTheme();
  return (
    <article style={{ backgroundColor: colors.background[80] }}>
      <div className='avatarContainer'>
        <Avatar size={'medium'} image={profileImage} />
      </div>
      <div className='infoContainer'>
        <h1
          style={{ color: colors.text[100] }}
        >{`${givenName} ${familyName}`}</h1>
        <h2
          style={{ color: colors.text[80] }}
        >{`${matchUps.length} games played on MatchUp`}</h2>
        <h3 style={{ color: colors.text[80] }}>Some other info</h3>
      </div>
    </article>
  );
};

export default ParticipantCard;
