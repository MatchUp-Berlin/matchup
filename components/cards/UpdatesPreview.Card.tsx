import React from 'react';
import { useTheme } from '../../contexts/Theme';
import styles from './styles/UpdatesPreview.Card.module.scss';

export interface IUpdatesPreviewCardProps {}

const UpdatesPreviewCard: React.FunctionComponent<IUpdatesPreviewCardProps> = (props) => {
  const { colors } = useTheme();
  return (
    <>
      <h1>Something else</h1>
    </>
  );
};

export default UpdatesPreviewCard;
