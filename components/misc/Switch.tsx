import React, { useState } from 'react';
import styles from './styles/Switch.module.scss';

export interface ISwitchProps {
  callback: () => void;
}

const Switch: React.FunctionComponent<ISwitchProps> = (props) => {
  const [toggle, setToggle] = useState(false);
  function toggleSwitch() {
    setToggle(!toggle);
    props.callback();
  }

  return (
    <>
      <div onClick={toggleSwitch} className={styles.toggle}>
        <div className={styles.toggleContainer}></div>
        <div className={styles.toggleCircle} style={toggle ? { left: '0.1em' } : { right: '0.1em' }}></div>
      </div>
    </>
  );
};

export default Switch;
