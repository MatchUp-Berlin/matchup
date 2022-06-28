import React, { LegacyRef, useRef } from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Filter.module.scss';

export interface IFilterProps {}

const Filter: React.FunctionComponent<IFilterProps> = (props) => {
  const datePickerRef = useRef<LegacyRef<HTMLInputElement>>();
  const { colors, darkMode } = useTheme();

  function openDateTimePicker(e: any) {
    e.preventDefault();
    if ('showPicker' in HTMLInputElement.prototype) {
      //@ts-ignore
      datePickerRef.current.type = 'datetime-local';
      //@ts-ignore
      datePickerRef.current.showPicker();
    } else {

    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        style={{ borderColor: darkMode ? colors.background[80] : '#DDDDDD' }}
        placeholder="Search for a city"
        className={styles.input + ' ' + styles.location}
      ></input>
      <input
        style={{ borderColor: darkMode ? colors.background[80] : '#DDDDDD' }}
        ref={datePickerRef}
        onClick={openDateTimePicker}
        placeholder="Select time"
        className={styles.input + ' ' + styles.date}
      ></input>
    </div>
  );
};

export default Filter;
