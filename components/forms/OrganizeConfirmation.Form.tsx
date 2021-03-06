import React, { useEffect } from 'react';
import { useTheme } from '../../contexts/Theme';
import { TCity, TSkillLevels, TSportCategories } from '../../utils/types/MatchUp.Type';
import { initializeMap } from '../../utils/Maps/initializeMap.util';
import MainInfo from '../misc/MainInfo';
import styles from './styles/OrganizeConfirmation.Form.module.scss';
import { TAddress } from '../../utils/types/Address.Type';
import BigPill from '../cards/BigPill.Card';

export interface IOrganizeConfirmationFormProps {
  title: string;
  address: TAddress;
  sportCategory: TSportCategories | undefined;
  timestamp: string;
  location: TCity;
  totalCost: number;
  skillLevel: TSkillLevels;
  attendanceMax: number;
  description: string;
  indoor: boolean;
}

const OrganizeConfirmationForm: React.FunctionComponent<IOrganizeConfirmationFormProps> = (props) => {
  const { colors, darkMode } = useTheme();

  useEffect(() => {
    initializeMap(props.address, true);
  });

  return (
    <div className={styles.wrapper}>
      <MainInfo
        title={props.title}
        sport={props.sportCategory as TSportCategories}
        timestamp={props.timestamp}
        city={props.location}
        costs={props.totalCost}
        indoor={props.indoor}
        address={props.address}
      />

      {/*  ------BIG PILLS------  */}
      <div className={styles.bigPills}>
        <BigPill filled title="Skill" text={props.skillLevel}></BigPill>
        <BigPill filled={false} text={`0 / ${props.attendanceMax}`} title="Coming"></BigPill>
      </div>

      <div
        className={styles.divider}
        style={{
          borderColor: darkMode ? colors.background[60] : '#DDDDDD',
        }}
      ></div>

      {/*  ------DESCRIPTION PREVIEW------  */}
      <div className={styles.description}>
        <p style={{ color: colors.text[80] }} className="highlight-1">
          Description
        </p>
        <p style={{ color: colors.text[60] }}>
          {props.description}
          {props.description.length > 100 && <span style={{ color: colors.primary[100] }}> Read more</span>}
        </p>
      </div>

      <div
        className={styles.divider}
        style={{
          borderColor: darkMode ? colors.background[60] : '#DDDDDD',
        }}
      ></div>

      <div id="map" className={styles.map}></div>
    </div>
  );
};

export default OrganizeConfirmationForm;
