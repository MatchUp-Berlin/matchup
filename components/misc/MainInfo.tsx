import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { useTheme } from '../../contexts/Theme';
import getSportIcon from '../../utils/getSportIcon';
import styles from './styles/MainInfo.module.scss';
import { TCity, TSportCategories } from '../../utils/types/MatchUp.Type';
import { TAddress } from '../../utils/types/Address.Type';
import { clock, euro, location } from '../icons';

export interface IMainInfoProps {
  title: string;
  sport: TSportCategories;
  timestamp: string;
  city: TCity;
  address?: TAddress;
  indoor: boolean;
  costs: number;
}

const MainInfo: React.FunctionComponent<IMainInfoProps> = (props) => {
  const { colors } = useTheme();
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: colors.text[100] }}>
        {props.title}
        <span>
          <Image width={'30px'} height={'30px'} src={getSportIcon(props.sport)} alt={props.sport}></Image>
        </span>
      </h1>
      {/* DETAILS */}
      <div className={styles.details}>
        <div className={styles.detail}>
        <svg width={18} height={18} fill={colors.text[60]} viewBox={clock.viewBox}>{clock.path}</svg>
          <p style={{ color: colors.text[60] }}>{moment(props.timestamp).format('H:mm dddd')}</p>
        </div>
        <div className={styles.detail}>
        <svg width={18} height={18} fill={colors.text[60]} viewBox={location.viewBox}>{location.path}</svg>
          <p style={{ color: colors.text[60] }}>
            {props.address?.street && props.address?.street + ', '}
            {props.city}
            {props.indoor ? ' | indoor' : ''}
          </p>
        </div>

        <div className={styles.detail}>
        <svg width={18} height={18} fill={colors.text[60]} viewBox={euro.viewBox}>{euro.path}</svg>
          <p style={{ color: colors.text[60] }}>{props.costs > 0 ? props.costs + '.00' : 'Free'}</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
