import React, { useEffect } from 'react';
import Link from 'next/link'
import { getUserById } from '../../utils/Query/getUserById.util';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Navigation.module.scss';
import Image from 'next/image';

export interface INavigationProps {}

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  const { colors, darkMode } = useTheme();
  return (
    <div className={styles.wrapper} style={darkMode ? {} : { backgroundImage: colors.primary }}>
      <Link href="/Organize">
        <div className={styles.link}>
          <img alt="organize-image" src="/organize.svg" />
          <p>Organize</p>
        </div>
      </Link>
      <Link href="/Watchlist">
        <div className={styles.link}>
          <img alt="watchlist-image" src="/watchlist.svg" />
          <p>Watchlist</p>
        </div>
      </Link>
      <Link href="/">
        <div className={styles.link}>
          <img alt="explore-image" src="/explore.svg" />
          <p>Explore</p>
        </div>
      </Link>
      <Link href="/YourMatchUps">
        <div className={styles.link}>
          <img alt="mymatchups-image" src="/mymatchups.svg" />
          <p>MatchUps</p>
        </div>
      </Link>
      <Link href="Profile/[id]">
        <div className={styles.link}>
          <img alt="profile-image" src="/profile.svg" />
          <p>Profile</p>
        </div>
      </Link>
      </div>
    )
};

export default Navigation;
