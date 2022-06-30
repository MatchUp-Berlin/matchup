import React from 'react';
import { Update } from '../../utils/types/Update.Type';
import { User } from '../../utils/types/User.Type';

export interface IUpdatesModalProps {
  updates: Update[];
  organizer: User;
}

const UpdatesModal: React.FunctionComponent<IUpdatesModalProps> = (props) => {
  return <></>;
};

export default UpdatesModal;
