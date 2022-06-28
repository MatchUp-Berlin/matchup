import React, { useState } from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/Switch.module.scss';

export interface ISwitchProps {
  callback: () => void;
}

const Switch: React.FunctionComponent<ISwitchProps> = (props) => {
  const { colors, shadows, darkMode } = useTheme();
  const [toggle, setToggle] = useState(false);
  function toggleSwitch() {
    setToggle(!toggle);
    props.callback();
  }

  return (
    <>
      <div onClick={toggleSwitch} className={styles.toggle}>
        <div
          className={styles.toggleContainer}
          style={{
            backgroundColor: toggle ? 'green' : colors.background[60],
            boxShadow: shadows.small,
            borderColor: darkMode ? colors.background[60] : '#DDDDDD',
          }}
        ></div>
        <div className={styles.toggleCircle} style={toggle ? { left: '45%' } : { left: '5%' }}></div>
      </div>
    </>
  );
};

export default Switch;
