import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTheme } from '../../contexts/Theme';
import { TSkillLevels } from '../../utils/types/MatchUp.Type';
import Switch from '../misc/Switch';
import styles from './styles/SecondaryInfo.Form.module.scss';

export interface ISecondaryInfoFormProps {
  attendanceMin: number;
  attendanceMax: number;
  description: string;
  image: File | undefined;
  skillLevel: TSkillLevels;
  reservedCourt: boolean;
  totalCost: number;

  setAttendanceMin: Dispatch<SetStateAction<number>>;
  setAttendanceMax: Dispatch<SetStateAction<number>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | undefined>>;
  setSkillLevel: Dispatch<SetStateAction<TSkillLevels>>;
  setReservedCourt: Dispatch<SetStateAction<boolean>>;
  setTotalCost: Dispatch<SetStateAction<number>>;
}

const SecondaryInfoForm: React.FunctionComponent<ISecondaryInfoFormProps> = (props) => {
  const { colors, shadows, darkMode } = useTheme();
  const [doesCost, setDoesCost] = useState<boolean>(false);

  function decreaseMinAttendance(): void {
    if (props.attendanceMin > 2) {
      props.setAttendanceMin((prevAttendanceMin) => prevAttendanceMin - 1);
    }
  }
  function increaseMinAttendance(): void {
    if (props.attendanceMin < props.attendanceMax) {
      props.setAttendanceMin((prevAttendanceMin) => prevAttendanceMin + 1);
    }
  }
  function decreaseMaxAttendance(): void {
    if (props.attendanceMax > props.attendanceMin) {
      props.setAttendanceMax((prevAttendanceMax) => prevAttendanceMax - 1);
    }
  }
  function increaseMaxAttendance(): void {
    if (props.attendanceMin < 30) {
      props.setAttendanceMax((prevAttendanceMax) => prevAttendanceMax + 1);
    }
  }

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.label} style={{ color: colors.text[80] }}>
        Participants
      </h4>
      {/* participants */}

      <div className={styles.participantsSection}>
        <div className={styles.participantsRow}>
          <label style={{ color: colors.text[60] }}>Minimum</label>
          <div className={styles.incrementButtons}>
            <button
              className={styles.incrementBtn}
              onClick={decreaseMinAttendance}
              style={{
                color: colors.text[60],
                boxShadow: shadows.small,
              }}
            >
              -
            </button>
            <p style={{ color: colors.text[100] }}>{props.attendanceMin}</p>
            <button
              className={styles.incrementBtn}
              onClick={increaseMinAttendance}
              style={{
                color: colors.text[60],
                boxShadow: shadows.small,
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.participantsRow}>
          <label style={{ color: colors.text[60] }}>Maximum</label>
          <div className={styles.incrementButtons}>
            <button
              className={styles.incrementBtn}
              onClick={decreaseMaxAttendance}
              style={{
                color: colors.text[60],
                boxShadow: shadows.small,
              }}
            >
              -
            </button>
            <p style={{ color: colors.text[100] }}>{props.attendanceMax}</p>
            <button
              className={styles.incrementBtn}
              onClick={increaseMaxAttendance}
              style={{
                color: colors.text[60],
                boxShadow: shadows.small,
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.participantsRow}>
          <label style={{ color: colors.text[60] }}>Skills level</label>
          <select
            className={styles.selectInput}
            onChange={(e) => props.setSkillLevel(e.target.value as TSkillLevels)}
            style={{
              borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              color: colors.text[60],
              outlineColor: colors.primary[80],
            }}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        {/* optional costs */}
      </div>
      <h4 className={styles.label} style={{ color: colors.text[80] }}>
        Optional Costs
      </h4>
      <div className={styles.rentedCourt}>
        <p style={{ color: colors.text[60] }}>Is there a reserved court?</p>
        <Switch callback={() => setDoesCost(true)} />
      </div>
      {doesCost && (
        <div className={styles.costRow}>
          <p style={{ color: colors.text[60] }}>Total Costs</p>
          <input
            style={{
              borderColor: darkMode ? colors.background[60] : '#DDDDDD',
              color: colors.text[60],
              outlineColor: colors.primary[80],
            }}
            type="currency"
            step="any"
            className={styles.costInput}
            placeholder="0.00€"
          />
        </div>
      )}
      {/* description */}
      <h4 className={styles.label} style={{ color: colors.text[80] }}>
        Description
      </h4>
      <textarea
        onChange={(e) => {
          props.setDescription(e.target.value);
        }}
        value={props.description}
        className={styles.textarea}
        style={{
          borderColor: darkMode ? colors.background[60] : '#DDDDDD',
          backgroundColor: colors.background[80],
          outlineColor: colors.primary[80],
        }}
      />
      {/* image */}
      <h4 className={styles.label} style={{ color: colors.text[80] }}>
        Upload Image
      </h4>

      <div className={styles.uploadImageWrapper} style={{ borderColor: darkMode ? colors.background[60] : '#DDDDDD' }}>
        <div
          className={styles.inputImageBtn}
          style={
            props.image
              ? {
                  backgroundImage: `url(${URL.createObjectURL(props.image)})`,
                  backgroundSize: 'cover',
                  backgroundPositionY: '50%',
                  backgroundPositionX: '50%',
                }
              : {}
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill={darkMode ? colors.background[60] : '#DDDDDD'}
            viewBox="0 0 16 16"
            style={{
              color: colors.text[60],
            }}
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
          </svg>
          <input
            className={styles.imageInput}
            type="file"
            onChange={(e) => {
              e.target.files && props.setImage(e.target.files[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryInfoForm;
