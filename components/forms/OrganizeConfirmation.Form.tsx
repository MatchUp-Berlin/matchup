import React, { useEffect } from 'react';
import { useTheme } from '../../contexts/Theme';
import { TCity, TSkillLevels, TSportCategories } from '../../utils/types/MatchUp.Type';
import { SkillsCard, SlotsCard, ParticipantsPreviewCard } from '../cards';
import UpdatesPreviewCard from '../cards/UpdatesPreview.Card';
import { initializeMap } from '../../utils/Maps/initializeMap.util';
import MainInfo from '../misc/MainInfo';
import styles from './styles/OrganizeConfirmation.Form.module.scss';
import { TAddress } from '../../utils/types/Address.Type';

export interface IOrganizeConfirmationFormProps {
  title: string;
  address: TAddress
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
    initializeMap(props.address)
  })

  return (
    <div className={styles.wrapper}>
      <MainInfo
        title={props.title}
        sport={props.sportCategory as TSportCategories}
        timestamp={props.timestamp}
        city={props.location}
        costs={props.totalCost}
        indoor={props.indoor}
      />

      {/*  ------BIG PILLS------  */}
      <div className={styles.bigPills}>
        <SkillsCard skillLevel={props.skillLevel}></SkillsCard>
        <SlotsCard slots={props.attendanceMax} attending={0}></SlotsCard>
      </div>

      <div
        className={styles.divider}
        style={{
          borderColor: darkMode ? colors.background[60] : '#DDDDDD',
        }}
      ></div>

      {/*  ------PARTICIPATING PREVIEW------  */}
      <ParticipantsPreviewCard users={[]}></ParticipantsPreviewCard>
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

      <UpdatesPreviewCard updates={[]} organizerId={''}></UpdatesPreviewCard>

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
